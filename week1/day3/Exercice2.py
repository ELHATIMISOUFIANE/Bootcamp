class Dog :
    def __init__(self, name, height):
        self.name = name
        self.height= height

    def bark(self):
        print(f"{self.name}va woof!")

    def jump(self):
        x=self.height*2
        print(f"{self.name}sauts {x} cm de haut!")

davids_dog = Dog("Rex", 50)
print(f"Nom du chien: {davids_dog.name}")
print(f"Taille du chien: {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()
sarahs_dog = Dog("Teacup", 20)
print(f"Nom du chien: {sarahs_dog.name}")
print(f"Taille du chien: {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"Le plus gros chien est {davids_dog.name}")
else:
    print(f"Le plus gros chien est {sarahs_dog.name}")