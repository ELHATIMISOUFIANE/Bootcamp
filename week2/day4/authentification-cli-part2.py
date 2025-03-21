# Partie 2: Authentification CLI - connexion et inscription

# 1. Création du dictionnaire d'utilisateurs
users = {
    "salman": "pass123",
    "soufiane": "123pass",
    "ayman": "qwerty123"
}

# 2. Boucle principale
logged_in = None

while True:
    command = input("Entrez 'login' pour vous connecter, 'register' pour vous inscrire, ou 'exit' pour quitter: ").lower()
    
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
            if username in users:
                print("Ce nom d'utilisateur existe déjà. Veuillez en choisir un autre.")
            else:
                break
        
        # Demande d'un mot de passe
        password = input("Choisissez un mot de passe: ")
        
        # Ajout du nouvel utilisateur
        users[username] = password
        print(f"Inscription réussie pour {username}!")
        
        # Connexion automatique après inscription
        logged_in = username
        print(f"Vous êtes maintenant connecté en tant que {username}.")
    
    else:
        print("Commande non reconnue. Utilisez 'login', 'register' ou 'exit'.")
