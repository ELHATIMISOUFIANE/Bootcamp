# test_data.py
import psycopg2

# Configuration de la base de données
DB_CONFIG = {
    "dbname": "restaurant_db",
    "user": "postgres",
    "password": "1234",
    "host": "localhost"
}

# Données de test
test_items = [
    ("Pizza Margherita", 10.99),
    ("Spaghetti Carbonara", 12.50),
    ("Tiramisu", 6.00),
    ("Caesar Salad", 8.75)
]

# Connexion à la base de données
conn = psycopg2.connect(**DB_CONFIG)
cur = conn.cursor()

# Insérer les données de test
for name, price in test_items:
    cur.execute(
        "INSERT INTO Menu_Article (item_name, item_price) VALUES (%s, %s)",
        (name, price)
    )

# Valider et fermer la connexion
conn.commit()
cur.close()
conn.close()

print("Données de test insérées avec succès.")