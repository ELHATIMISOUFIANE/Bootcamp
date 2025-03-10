#Exercice7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")

apple_count = basket.count("Apples")
print(f"Number of Apples: {apple_count}")

basket.clear()
print(basket)