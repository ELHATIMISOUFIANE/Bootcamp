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
    "dbname": "restaurant_db",  # Nom de la base de données
    "user": "postgres",         # Utilisateur PostgreSQL
    "password": "1234",         # Mot de passe PostgreSQL
    "host": "localhost",        # Hôte (généralement "localhost")
    "port": 5432                # Port (généralement 5432)
}
# Fonction pour obtenir une connexion à la base de données
def get_db_connection():
    conn = psycopg2.connect(**DB_CONFIG)
    conn.autocommit = True
    return conn


# Initialiser la base de données au démarrage
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

        cur.execute("SELECT item_name as name, item_price as price FROM Menu_Article WHERE item_name = %s",
                    (item_name,))
        item = cur.fetchone()

        cur.close()
        conn.close()

        if not item:
            raise HTTPException(status_code=404, detail="Article de menu non trouvé")

        return item
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur de base de données: {str(e)}")


# Initialiser la base de données au démarrage
init_db()

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)