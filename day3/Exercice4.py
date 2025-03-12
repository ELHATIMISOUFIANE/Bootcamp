class Zoo:

    def __init__(self, zoo_name):
        self.animals = []  # Liste vide pour stocker les animaux
        self.name = zoo_name  # Nom du zoo

    def add_animal(self, new_animal):
        """Ajoute un nouvel animal à la liste s'il n'est pas déjà présent."""
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} a été ajouté au zoo.")
        else:
            print(f"{new_animal} est déjà dans le zoo.")

    def get_animals(self):
        """Affiche tous les animaux du zoo."""
        print("Animaux dans le zoo :")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        """Retire un animal de la liste s'il existe."""
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} a été vendu.")
        else:
            print(f"{animal_sold} n'est pas dans le zoo.")

    def sort_animals(self):
        """Trie les animaux par ordre alphabétique et les regroupe par leur première lettre."""
        self.animals.sort()  # Trie les animaux par ordre alphabétique
        grouped_animals = {}
        for animal in self.animals:
            first_letter = animal[0].upper()  # Prend la première lettre de l'animal
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = []  # Crée une nouvelle liste pour cette lettre
            grouped_animals[first_letter].append(animal)  # Ajoute l'animal au groupe
        return grouped_animals

    def get_groups(self):
        """Affiche les groupes d'animaux."""
        grouped_animals = self.sort_animals()
        print("Groupes d'animaux :")
        for key, value in grouped_animals.items():
            print(f"{key}: {value}")