
word = input("Entrez un mot : ").strip()

# Créer un dictionnaire pour stocker les index des lettres
letter_indexes = {}

# Parcourir chaque lettre du mot avec son index
for index, letter in enumerate(word):
    # Convertir la lettre en chaîne de caractères (au cas où)
    letter = str(letter)

    # Si la lettre n'est pas déjà dans le dictionnaire, l'ajouter avec une liste vide
    if letter not in letter_indexes:
        letter_indexes[letter] = []

    # Ajouter l'index de la lettre à la liste correspondante
    letter_indexes[letter].append(index)