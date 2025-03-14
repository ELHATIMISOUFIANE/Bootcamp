class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Créer une nouvelle classe Siamese qui hérite de Cat
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Créer une liste all_cats contenant trois instances de chats
all_cats = [
    Bengal("Bengie", 3),
    Chartreux("Charlie", 5),
    Siamese("Simba", 2)
]

# Créer une instance de Pets avec la liste all_cats
sara_pets = Pets(all_cats)

# Faire promener tous les chats
sara_pets.walk()