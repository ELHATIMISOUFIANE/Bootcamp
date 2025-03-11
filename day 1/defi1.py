
number = int(input("Entrez un nombre : "))
length = int(input("Entrez la longueur de la liste : "))


multiples = [number * i for i in range(1, length + 1)]


print("Liste des multiples :", multiples)