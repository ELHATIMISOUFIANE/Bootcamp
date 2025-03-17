import math
from turtle import Turtle  # Bonus: Pour dessiner les cercles

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Vous devez spécifier soit le rayon, soit le diamètre.")

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    def area(self):
        return math.pi * (self.radius ** 2)

    def __repr__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter})"

    def __add__(self, other):
        new_radius = self.radius + other.radius
        return Circle(radius=new_radius)

    def __lt__(self, other):
        return self.radius < other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def draw(self, turtle, x, y):
        turtle.penup()
        turtle.goto(x, y - self.radius)
        turtle.pendown()
        turtle.circle(self.radius)

# Exemple d'utilisation
c1 = Circle(radius=5)
c2 = Circle(diameter=10)

print(c1)  # Affiche: Circle(radius=5, diameter=10)
print(c2)  # Affiche: Circle(radius=5, diameter=10)

# Calcul de l'aire
print(f"Aire de c1: {c1.area()}")  # Affiche: Aire de c1: 78.53981633974483

# Addition de deux cercles
c3 = c1 + c2
print(c3)  # Affiche: Circle(radius=10, diameter=20)

# Comparaison de cercles
print(c1 == c2)  # Affiche: True
print(c1 < c3)   # Affiche: True

# Tri d'une liste de cercles
circles = [Circle(radius=3), Circle(radius=1), Circle(radius=2)]
sorted_circles = sorted(circles)
print(sorted_circles)  # Affiche: [Circle(radius=1, diameter=2), Circle(radius=2, diameter=4), Circle(radius=3, diameter=6)]

# Bonus: Dessiner les cercles avec Turtle
turtle = Turtle()
turtle.speed(0)
x = -200
for circle in sorted_circles:
    circle.draw(turtle, x, 0)
    x += 100
turtle.done()