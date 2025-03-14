import random

class Game:
    def get_user_item(self):
        while True:
            user_item = input("Choisissez un élément (rock/paper/scissors) : ").lower()
            if user_item in ["rock", "paper", "scissors"]:
                return user_item
            else:
                print("Choix invalide. Veuillez choisir entre rock, paper ou scissors.")

    def get_computer_item(self):
        return random.choice(["rock", "paper", "scissors"])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "paper" and computer_item == "rock") or \
             (user_item == "scissors" and computer_item == "paper"):
            return "win"
        else:
            return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"Vous avez sélectionné {user_item}. L'ordinateur a sélectionné {computer_item}.")
        if result == "win":
            print("Vous gagnez !")
        elif result == "loss":
            print("Vous perdez !")
        else:
            print("Match nul !")

        return result