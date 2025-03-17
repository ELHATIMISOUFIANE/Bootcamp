class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Création des trois chats
cat1 = Cat("Misty", 3)
cat2 = Cat("Whiskers", 5)
cat3 = Cat("Snowball", 7)

# Fonction pour trouver le chat le plus âgé
def find_oldest_cat(cat_list):
    oldest_cat = cat_list[0]  # On suppose que le premier chat est le plus âgé
    for cat in cat_list:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    return oldest_cat

# Liste des chats
cats = [cat1, cat2, cat3]

# Trouver le chat le plus âgé
oldest_cat = find_oldest_cat(cats)

# Afficher le résultat
print(f"Le chat le plus âgé est {oldest_cat.name}, et il a{oldest_cat.age} ans.")