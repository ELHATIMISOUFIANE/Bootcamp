family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# Dictionnaire pour stocker les coûts par personne
costs = {}

# Parcourir chaque membre de la famille
for name, age in family.items():
    if age < 3:
        costs[name] = 0  # Gratuit pour les moins de 3 ans
    elif 3 <= age <= 12:
        costs[name] = 10  # $10 pour les 3-12 ans
    else:
        costs[name] = 15  # $15 pour les plus de 12 ans

# Afficher les coûts par personne
print("Coûts par personne :", costs)

# Calculer le coût total
total_cost = sum(costs.values())
print("Coût total des billets :", total_cost)