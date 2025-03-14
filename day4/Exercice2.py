class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} est aboying"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} a gagné le combat contre {other_dog.name} !"
        elif self_power < other_power:
            return f"{other_dog.name} a gagné le combat contre {self.name} !"
        else:
            return f"Match nul entre {self.name} et {other_dog.name} !"


# Créer 3 chiens
dog1 = Dog("Rex", 5, 30)
dog2 = Dog("Max", 3, 25)
dog3 = Dog("Buddy", 7, 40)

# Faire aboyer les chiens
print(dog1.bark())  # Rex est aboying
print(dog2.bark())  # Max est aboying
print(dog3.bark())  # Buddy est aboying

# Faire combattre les chiens
print(dog1.fight(dog2))  # Rex a gagné le combat contre Max !
print(dog2.fight(dog3))  # Buddy a gagné le combat contre Max !
print(dog3.fight(dog1))  # Buddy a gagné le combat contre Rex !