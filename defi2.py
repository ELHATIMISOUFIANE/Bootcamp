chaine = input("Entrez une chaîne de caractères : ")
nouvelle_chaine = ""
for i in range(len(chaine)):
    if i == 0 or chaine[i] != chaine[i - 1]:
        nouvelle_chaine += chaine[i]

print("Chaîne sans doubles consécutifs :", nouvelle_chaine)