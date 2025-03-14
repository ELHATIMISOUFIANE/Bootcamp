from Exercice4 import Family
class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)  # Appel du constructeur de la classe parente

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']} utilise son pouvoir : {member['power']}")
                else:
                    raise Exception(f"{member['name']} n'a pas encore 18 ans !")
        return False  # Si le membre n'est pas trouvé

    def incredible_presentation(self):
        print("* Voici notre puissante famille **")
        super().family_presentation()  # Appel de la méthode de la classe parente


# Créer une instance de la classe TheIncredibles
incredible_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredibles = TheIncredibles("Incredibles", incredible_members)

# Afficher la présentation incroyable
incredibles.incredible_presentation()

# Utiliser le pouvoir d'un membre
incredibles.use_power('Michael')  # Michael utilise son pouvoir : fly
# incredibles.use_power('John')  # Lèvera une exception si John n'a pas 18 ans

# Ajouter Baby Jack
incredibles.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')

# Afficher à nouveau la présentation incroyable
incredibles.incredible_presentation()