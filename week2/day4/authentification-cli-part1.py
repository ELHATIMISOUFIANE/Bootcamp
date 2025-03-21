# Partie 1: Authentification CLI - connexion

# 1. Création du dictionnaire d'utilisateurs
users = {
    "salman": "pass123",
    "soufiane": "123pass",
    "ayman": "qwerty123"
}

# 2. Boucle principale
logged_in = None

while True:
    command = input("Entrez 'login' pour vous connecter ou 'exit' pour quitter: ").lower()
    
    if command == "exit":
        print("Au revoir!")
        break
        
    elif command == "login":
        username = input("Nom d'utilisateur: ")
        password = input("Mot de passe: ")
        
        # Vérification des identifiants
        if username in users and users[username] == password:
            print(f"Vous êtes maintenant connecté en tant que {username}.")
            logged_in = username
        else:
            print("Nom d'utilisateur ou mot de passe incorrect.")
    
    else:
        print("Commande non reconnue. Utilisez 'login' ou 'exit'.")
