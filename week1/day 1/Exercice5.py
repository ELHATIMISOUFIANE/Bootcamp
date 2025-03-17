#Exercice5
my_fav_numbers = {9, 17, 21}
my_fav_numbers.add(22)
my_fav_numbers.add(89)

my_fav_numbers.remove(89)

friend_fav_numbers = {10, 20, 30}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)