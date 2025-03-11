import random


def compare_numbers(user_number):
    if user_number < 1 or user_number > 100:
        print("Veuillez entrer un nombre entre 1 et 100.")
        return

    random_number = random.randint(1, 100)

    if user_number == random_number:
        print("Succès ! Les deux nombres sont identiques :", user_number)
    else:
        print("Échec. Votre nombre :", user_number, "| Nombre aléatoire :", random_number)



compare_numbers(42)
compare_numbers(150)