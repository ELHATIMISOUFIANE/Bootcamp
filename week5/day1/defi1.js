// Fonction 1 : makeAllCaps
function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
      // Vérifie si tous les éléments du tableau sont des chaînes de caractères
      const allStrings = arr.every(word => typeof word === 'string');
      if (allStrings) {
        // Résout avec le tableau des mots en majuscules
        resolve(arr.map(word => word.toUpperCase()));
      } else {
        // Rejette si l'un des éléments n'est pas une chaîne de caractères
        reject('Tous les éléments doivent être des chaînes de caractères');
      }
    });
  }
  
  // Fonction 2 : sortWords
  function sortWords(arr) {
    return new Promise((resolve, reject) => {
      // Vérifie si la longueur du tableau est supérieure à 4
      if (arr.length > 4) {
        // Résout avec le tableau trié
        resolve(arr.sort());
      } else {
        // Rejette si la longueur du tableau est inférieure ou égale à 4
        reject('La longueur du tableau doit être supérieure à 4');
      }
    });
  }
  
  // Tests
  // Exemple 1 (Rejet) : un nombre dans le tableau
  makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))  // Ne sera pas exécuté
    .catch(error => console.log(error));  // Affichera : "Tous les éléments doivent être des chaînes de caractères"
  
  // Exemple 2 (Rejet) : tableau trop court
  makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))  // Ne sera pas exécuté
    .catch(error => console.log(error));  // Affichera : "La longueur du tableau doit être supérieure à 4"
  
  // Exemple 3 (Résolution et tri) : tableau valide et trié
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))  // Affichera : ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error));  // Ne sera pas exécuté
  