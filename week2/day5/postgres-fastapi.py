# api.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import psycopg2
from psycopg2.extras import RealDictCursor
import uvicorn

app = FastAPI(title="Restaurant Menu API")

# Modèles de données
class MenuItem(BaseModel):
    name: str
    price: float

class MenuItemUpdate(BaseModel):
    new_name: str
    new_price: float

# Configuration de la base de données
DB_CONFIG = {
    "dbname": "restaurant_db",
    "user": "postgres",
    "password": "1234",
    "host": "localhost"
}

# Fonction pour obtenir une connexion à la base de données
def get_db_connection():
    conn = psycopg2.connect(**DB_CONFIG)
    conn.autocommit = True
    return conn

# Fonction pour initialiser la base de données si nécessaire
def init_db():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        # Créer la table si elle n'existe pas
        cur.execute("""
            CREATE TABLE IF NOT EXISTS Menu_Article (
                id SERIAL PRIMARY KEY,
                item_name VARCHAR(100) UNIQUE NOT NULL,
                item_price NUMERIC(10, 2) NOT NULL
            )
        """)
        conn.commit()
        cur.close()
        conn.close()
        print("Base de données initialisée avec succès.")
    except Exception as e:
        print(f"Erreur lors de l'initialisation de la base de données: {e}")

# Routes API
@app.get("/")
def read_root():
    return {"message": "Bienvenue sur l'API de gestion de menu du restaurant"}

@app.get("/menu/")
def get_all_menu_items():
    try:
        conn = get_db_connection()
        cur = conn.cursor(cursor_factory=RealDictCursor)
        
        cur.execute("SELECT item_name as name, item_price as price FROM Menu_Article ORDER BY item_name")
        items = cur.fetchall()
        
        cur.close()
        conn.close()
        
        return items
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur de base de données: {str(e)}")

@app.get("/menu/{item_name}")
def get_menu_item(item_name: str):
    try:
        conn = get_db_connection()
        cur = conn.cursor(cursor_factory=RealDictCursor)
        
        cur.execute("SELECT item_name as name, item_price as price FROM Menu_Article WHERE item_name = %s", (item_name,))
        item = cur.fetchone()
        
        cur.close()
        conn.close()
        
        if not item:
            raise HTTPException(status_code=404, detail="Article de menu non trouvé")
        
        return item
    except Exception as e:
        if "not found" in str(e):
            raise HTTPException(status_code=404, detail="Article de menu non trouvé")
        raise HTTPException(status_code=500, detail=f"Erreur de base de données: {str(e)}")

@app.post("/menu/", status_code=201)
def create_menu_item(item: MenuItem):
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        # Vérifier si l'article existe déjà
        cur.execute("SELECT * FROM Menu_Article WHERE item_name = %s", (item.name,))
        if cur.fetchone() is not None:
            cur.close()
            conn.close()
            raise HTTPException(status_code=400, detail="Un article avec ce nom existe déjà")
        
        # Insérer le nouvel article
        cur.execute(
            "INSERT INTO Menu_Article (item_name, item_price) VALUES (%s, %s)",
            (item.name, item.price)
        )
        
        cur.close()
        conn.close()
        
        return {"name": item.name, "price": item.price}
    except Exception as e:
        if "already exists" in str(e):
            raise HTTPException(status_code=400, detail="Un article avec ce nom existe déjà")
        raise HTTPException(status_code=500, detail=f"Erreur lors de la création: {str(e)}")

@app.put("/menu/{item_name}")
def update_menu_item(item_name: str, item: MenuItemUpdate):
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        # Vérifier si l'article existe
        cur.execute("SELECT * FROM Menu_Article WHERE item_name = %s", (item_name,))
        if cur.fetchone() is None:
            cur.close()
            conn.close()
            raise HTTPException(status_code=404, detail="Article de menu non trouvé")
        
        # Mettre à jour l'article
        cur.execute(
            "UPDATE Menu_Article SET item_name = %s, item_price = %s WHERE item_name = %s",
            (item.new_name, item.new_price, item_name)
        )
        
        cur.close()
        conn.close()
        
        return {"name": item.new_name, "price": item.new_price}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de la mise à jour: {str(e)}")

@app.delete("/menu/{item_name}")
def delete_menu_item(item_name: str):
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        # Vérifier si l'article existe
        cur.execute("SELECT * FROM Menu_Article WHERE item_name = %s", (item_name,))
        if cur.fetchone() is None:
            cur.close()
            conn.close()
            raise HTTPException(status_code=404, detail="Article de menu non trouvé")
        
        # Supprimer l'article
        cur.execute("DELETE FROM Menu_Article WHERE item_name = %s", (item_name,))
        
        cur.close()
        conn.close()
        
        return {"message": f"Article '{item_name}' supprimé avec succès"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de la suppression: {str(e)}")

# Initialiser la base de données au démarrage
@app.on_event("startup")
def startup_db_client():
    init_db()

if __name__ == "__main__":
    uvicorn.run("api:app", host="0.0.0.0", port=8000, reload=True)
