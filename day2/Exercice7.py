import random


def main():
    season = input("Entrez une saison (winter, spring, summer, autumn/fall) : ").lower()

    # Valider la saisie de l'utilisateur
    if season not in ["winter", "spring", "summer", "autumn", "fall"]:
        print("Saison invalide. Utilisation de la température par défaut.")
        season = None

    def get_random_temp(season):

        if season == "winter":
            return round(random.uniform(-10, 16), 1)  # Température entre -10 et 16
        elif season == "spring":
            return round(random.uniform(10, 23), 1)  # Température entre 10 et 23
        elif season == "summer":
            return round(random.uniform(24, 40), 1)  # Température entre 24 et 40
        elif season == "autumn" or season == "fall":
            return round(random.uniform(5, 20), 1)  # Température entre 5 et 20
        else:
            return round(random.uniform(-10, 40), 1)  # Par défaut, entre -10 et 40

    # Obtenir la température aléatoire
    temperature = get_random_temp(season)

    # Afficher la température
    print(f"La température actuelle est de {temperature} degrés Celsius.")

    # Donner des conseils en fonction de la température
    if temperature < 0:
        print("Brrr, that’s freezing! Portez des couches supplémentaires aujourd'hui.")
    elif 0 <= temperature < 16:
        print("Assez froid! N'oubliez pas votre manteau.")
    elif 16 <= temperature < 23:
        print("Il fait frais, mais c'est agréable. Profitez de votre journée !")
    elif 24 <= temperature < 32:
        print("Il fait chaud. Pensez à boire de l'eau et à rester à l'ombre.")
    elif 32 <= temperature <= 40:
        print("Il fait très chaud ! Évitez de sortir aux heures les plus chaudes.")
main()

