# Initialisation de la grille du jeu
board = [" " for _ in range(9)]  # Une liste de 9 éléments pour représenter la grille 3x3


# Fonction pour afficher la grille
def display_board():
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("-----------")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("-----------")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("\n")


# Fonction pour obtenir l'entrée du joueur
def player_input(player):
    while True:
        try:
            position = int(input(f"Joueur {player}, choisissez une position (1-9) : ")) - 1
            if 0 <= position <= 8 and board[position] == " ":
                board[position] = player
                break
            else:
                print("Position invalide ou déjà occupée. Réessayez.")
        except ValueError:
            print("Veuillez entrer un nombre valide.")


# Fonction pour vérifier s'il y a un gagnant
def check_win():
    # Combinaisons gagnantes (lignes, colonnes, diagonales)
    win_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Lignes
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Colonnes
        [0, 4, 8], [2, 4, 6]  # Diagonales
    ]
    for combo in win_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] != " ":
            return True
    return False


# Fonction pour vérifier si le jeu est terminé par une égalité
def check_draw():
    return " " not in board


# Fonction principale pour gérer le jeu
def play():
    current_player = "X"  # Le joueur X commence
    while True:
        display_board()
        player_input(current_player)

        if check_win():
            display_board()
            print(f"Félicitations ! Le joueur {current_player} a gagné !")
            break
        elif check_draw():
            display_board()
            print("Match nul !")
            break

        # Changer de joueur
        current_player = "O" if current_player == "X" else "X"


# Démarrer le jeu
if __name__ == "__main__":
    play()