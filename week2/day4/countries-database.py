# Ajout de pays aléatoires depuis l'API REST Countries à la base de données
import sqlite3
import requests
import random

# Fonction pour initialiser la table des pays dans la base de données
def initialize_countries_table():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    # Création de la table pays si elle n'existe pas
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS countries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        capital TEXT,
        flag TEXT,
        subregion TEXT,
        population INTEGER
    )
    ''')
    
    conn.commit()
    conn.close()

# Fonction pour récupérer tous les pays depuis l'API
def fetch_all_countries():
    try:
        response = requests.get('https://restcountries.com/v3.1/all')
        response.raise_for_status()  # Vérifier si la requête a réussi
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Erreur lors de la récupération des pays: {e}")
        return []

# Fonction pour ajouter un pays à la base de données
def add_country(name, capital, flag, subregion, population):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    cursor.execute(
        "INSERT INTO countries (name, capital, flag, subregion, population) VALUES (?, ?, ?, ?, ?)",
        (name, capital, flag, subregion, population)
    )
    
    conn.commit()
    conn.close()

# Fonction pour obtenir les pays déjà dans la base de données
def get_existing_countries():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    cursor.execute("SELECT name FROM countries")
    existing = [row[0] for row in cursor.fetchall()]
    
    conn.close()
    return existing

# Fonction pour ajouter 10 pays aléatoires à la base de données
def add_random_countries(count=10):
    # Initialiser la table des pays
    initialize_countries_table()
    
    # Récupérer les pays existants
    existing_countries = get_existing_countries()
    
    # Récupérer tous les pays depuis l'API
    all_countries = fetch_all_countries()
    
    if not all_countries:
        print("Impossible de récupérer des pays depuis l'API.")
        return
    
    # Filtrer les pays déjà existants dans la base de données
    new_countries = [country for country in all_countries if country.get('name', {}).get('common') not in existing_countries]
    
    # S'il n'y a pas assez de nouveaux pays
    if len(new_countries) < count:
        print(f"Attention: seulement {len(new_countries)} nouveaux pays disponibles.")
        count = min(count, len(new_countries))
    
    # Sélectionner des pays aléatoires
    selected_countries = random.sample(new_countries, count)
    
    # Ajouter les pays à la base de données
    added_count = 0
    for country in selected_countries:
        name = country.get('name', {}).get('common', 'Inconnu')
        
        # Gérer les cas où certaines données pourraient être manquantes
        capital = country.get('capital', ['Inconnu'])[0] if country.get('capital') else 'Inconnu'
        flag = country.get('flags', {}).get('png', 'Inconnu')
        subregion = country.get('subregion', 'Inconnu')
        population = country.get('population', 0)
        
        add_country(name, capital, flag, subregion, population)
        added_count += 1
        print(f"Ajouté: {name} (Capitale: {capital}, Population: {population})")
    
    print(f"\n{added_count} pays ont été ajoutés à la base de données.")

# Fonction pour afficher tous les pays de la base de données
def display_countries():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    cursor.execute("SELECT name, capital, subregion, population FROM countries")
    countries = cursor.fetchall()
    
    print("\nPays dans la base de données:")
    print("-" * 80)
    print(f"{'Nom':<30} {'Capitale':<20} {'Sous-région':<20} {'Population':<10}")
    print("-" * 80)
    
    for country in countries:
        name, capital, subregion, population = country
        population_formatted = f"{population:,}".replace(",", " ")
        print(f"{name:<30} {capital:<20} {subregion:<20} {population_formatted:<10}")
    
    print("-" * 80)
    print(f"Total: {len(countries)} pays")
    
    conn.close()

# Menu principal
def main():
    print("Gestion de la base de données des pays")
    print("-------------------------------------")
    
    while True:
        print("\nOptions:")
        print("1. Ajouter 10 pays aléatoires à la base de données")
        print("2. Afficher tous les pays de la base de données")
        print("3. Quitter")
        
        choice = input("\nChoisissez une option (1-3): ")
        
        if choice == "1":
            add_random_countries(10)
        elif choice == "2":
            display_countries()
        elif choice == "3":
            print("Au revoir!")
            break
        else:
            print("Option invalide. Veuillez réessayer.")

if __name__ == "__main__":
    main()
