from game import Game

def get_user_menu_choice():
    while True:
        print("\nMenu :")
        print("1. Jouer à un nouveau jeu")
        print("2. Afficher les scores")
        print("3. Quitter")
        choice = input("Choisissez une option (1/2/3) : ")
        if choice in ["1", "2", "3"]:
            return choice
        else:
            print("Choix invalide. Veuillez choisir 1, 2 ou 3.")

def print_results(results):
    print("\nRésultats des jeux :")
    print(f"Victoires : {results['win']}")
    print(f"Défaites : {results['loss']}")
    print(f"Matchs nuls : {results['draw']}")
    print("Merci d'avoir joué !")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()

        if choice == "1":
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == "2":
            print_results(results)
        elif choice == "3":
            print_results(results)
            break

if __name__ == "__main__":
    main()