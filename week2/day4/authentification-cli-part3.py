# Partie 3: Authentification CLI avec base de données SQLite et chiffrement des mots de passe

import sqlite3
import hashlib
import os

# Fonction pour créer la base de données si elle n'existe pas
def initialize_database():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    # Création de la table utilisateurs si elle n'existe pas
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        username TEXT PRIMARY KEY,
        password TEXT NOT NULL,
        salt TEXT NOT NULL
    )
    ''')
    
    # Vérifier si la base de données contient déjà des utilisateurs
    cursor.execute("SELECT COUNT(*) FROM users")
    count = cursor.fetchone()[0]
    
    # Si la base de données est vide, ajouter les utilisateurs par défaut
    if count == 0:
        default_users = [
            ("soufiane", "passd123"),
            ("salman", "pass"),
            ("charlie", "qwerty")
        ]
        
        for username, password in default_users:
            # Génération d'un salt aléatoire pour chaque utilisateur
            salt = os.urandom(32).hex()
            # Hachage du mot de passe avec le salt
            hashed_password = hashlib.sha256((password + salt).encode()).hexdigest()
            
            cursor.execute("INSERT INTO users VALUES (?, ?, ?)", (username, hashed_password, salt))
    
    conn.commit()
    conn.close()

# Fonction pour vérifier les identifiants
def check_credentials(username, password):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    cursor.execute("SELECT password, salt FROM users WHERE username = ?", (username,))
    result = cursor.fetchone()
    conn.close()
    
    if result:
        stored_password, salt = result
        # Hachage du mot de passe entré avec le salt stocké
        hashed_password = hashlib.sha256((password + salt).encode()).hexdigest()
        return hashed_password == stored_password
    
    return False

# Fonction pour vérifier si un utilisateur existe
def user_exists(username):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    cursor.execute("SELECT username FROM users WHERE username = ?", (username,))
    result = cursor.fetchone()
    conn.close()
    
    return result is not None

# Fonction pour ajouter un nouvel utilisateur
def add_user(username, password):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    # Génération d'un salt aléatoire
    salt = os.urandom(32).hex()
    # Hachage du mot de passe avec le salt
    hashed_password = hashlib.sha256((password + salt).encode()).hexdigest()
    
    cursor.execute("INSERT INTO users VALUES (?, ?, ?)", (username, hashed_password, salt))
    conn.commit()
    conn.close()


# Initialisation de la base de données
initialize_database()

# Boucle principale
logged_in = None

while True:
    command = input("Entrez 'login' pour vous connecter, 'register' pour vous inscrire, ou 'exit' pour quitter: ").lower()
    
    if command == "exit":
        print("Au revoir!")
        break
        
    elif command == "login":
        username = input("Nom d'utilisateur: ")
        password = input("Mot de passe: ")
        
        # Vérification des identifiants avec la base de données
        if check_credentials(username, password):
            print(f"Vous êtes maintenant connecté en tant que {username}.")
            logged_in = username
        else:
            print("Nom d'utilisateur ou mot de passe incorrect.")
            register = input("Voulez-vous vous inscrire? (oui/non): ").lower()
            
            if register == "oui":
                # Redirection vers l'inscription
                command = "register"
            else:
                print("Connexion annulée.")
    
    elif command == "register":
        # Demande d'un nom d'utilisateur unique
        while True:
            username = input("Choisissez un nom d'utilisateur: ")
            if user_exists(username):
                print("Ce nom d'utilisateur existe déjà. Veuillez en choisir un autre.")
            else:
                break
        
        # Demande d'un mot de passe
        password = input("Choisissez un mot de passe: ")
        
        # Ajout du nouvel utilisateur à la base de données
        add_user(username, password)
        print(f"Inscription réussie pour {username}!")
        
        # Connexion automatique après inscription
        logged_in = username
        print(f"Vous êtes maintenant connecté en tant que {username}.")
    
    else:
        print("Commande non reconnue. Utilisez 'login', 'register' ou 'exit'.")
