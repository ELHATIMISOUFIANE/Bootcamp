class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal, count=1):
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count

    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            info += f"{animal} : {count}\n"
        info += "\n    E-I-E-I-0!"
        return info

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()
        animals_str = ', '.join([f"{animal}s" if self.animals[animal] > 1 else animal for animal in animal_types[:-1]])
        animals_str += f" and {animal_types[-1]}s" if self.animals[animal_types[-1]] > 1 else f" and {animal_types[-1]}"
        return f"{self.name}'s farm has {animals_str}."

# Utilisation de la classe Farm
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

# Test des méthodes bonus
print(macdonald.get_animal_types())
print(macdonald.get_short_info())