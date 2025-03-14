from Exercice1 import Dog  # Import de la classe Dog
import random  # Pour choisir une phrase aléatoire dans do_a_trick

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)  # Appel du constructeur de la classe parente
        self.trained = trained  # Attribut supplémentaire

    def train(self):
        print(self.bark())  # Fait aboyer le chien
        self.trained = True  # Le chien est maintenant entraîné

    def play(self, *args):
        dog_names = [self.name] + [dog.name for dog in args]  # Liste des noms des chiens
        print(f"{', '.join(dog_names)} tous jouent ensemble")  # Affiche les noms des chiens qui jouent

    def do_a_trick(self):
        if self.trained:  # Vérifie si le chien est entraîné
            tricks = [
                f"{self.name} fait un baril roll",
                f"{self.name} se tient sur ses pattes arrière",
                f"{self.name} secoue ta main",
                f"{self.name} joue dead"
            ]
            print(random.choice(tricks))  # Choisit une phrase aléatoire
        else:
            print(f"{self.name} n'est pas encore entraîné !")


# Exemple d'utilisation
if __name__ == "__main__":
    # Créer des instances de PetDog
    dog1 = PetDog("Rex", 5, 30)
    dog2 = PetDog("Max", 3, 25)
    dog3 = PetDog("Buddy", 7, 40)

    # Entraîner un chien
    dog1.train()  # Rex est maintenant entraîné

    # Faire jouer les chiens ensemble
    dog1.play(dog2, dog3)  # Rex, Max, Buddy tous jouent ensemble

    # Faire faire un tour à un chien entraîné
    dog1.do_a_trick()  # Par exemple : "Rex fait un baril roll"

    # Essayer de faire faire un tour à un chien non entraîné
    dog2.do_a_trick()  # Max n'est pas encore entraîné !