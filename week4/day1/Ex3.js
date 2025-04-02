const isString = (value) => typeof value === 'string';  // Fonction fléchée qui vérifie si la valeur est une chaîne de caractères

console.log(isString('hello'));  // Affichera true
console.log(isString([1, 2, 4, 0]));  // Affichera false
