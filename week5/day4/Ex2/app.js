// Importation avec syntaxe ES6
import persons from './data.js';

// Fonction pour calculer l'âge moyen
function calculateAverageAge(personsArray) {
  const totalAge = personsArray.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / personsArray.length;
  return averageAge;
}

// Calcul et affichage de l'âge moyen
const averageAge = calculateAverageAge(persons);
console.log(`L'âge moyen des personnes est: ${averageAge.toFixed(2)} ans`);