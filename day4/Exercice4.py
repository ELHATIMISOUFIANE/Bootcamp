class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)  # Ajoute un nouveau membre
        print(f"Félicitations ! {kwargs['name']} est né(e) dans la famille {self.last_name}.")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False  # Si le membre n'est pas trouvé

    def family_presentation(self):
        print(f"Famille {self.last_name} :")
        for member in self.members:
            print(f"  - {member['name']}, {member['age']} ans, {member['gender']}")


# Créer une instance de la classe Family
members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

family = Family("Smith", members)

# Ajouter un enfant
family.born(name='John', age=0, gender='Male', is_child=True)

# Vérifier si un membre a plus de 18 ans
print(f"Michael a plus de 18 ans ? {family.is_18('Michael')}")  # True
print(f"John a plus de 18 ans ? {family.is_18('John')}")  # False

# Afficher la présentation de la famille
family.family_presentation()