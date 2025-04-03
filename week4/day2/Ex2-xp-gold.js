//Ex1:
function sommeTableau(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }
  
  // Exemple d'utilisation :
  console.log(sommeTableau([1, 2, 3, 4])); // Résultat: 10


//Ex2:

  function supprimerDoublons(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  console.log(supprimerDoublons([1, 2, 2, 3, 4, 4, 5])); // Résultat: [1, 2, 3, 4, 5]

//Ex3:

function nettoyerTableau(arr) {
    return arr.filter(item => {
      return item !== null && 
             item !== 0 && 
             item !== "" && 
             item !== false && 
             item !== undefined && 
             !Number.isNaN(item);
    });
  }
  
  // Solution plus concise (mais attention aux nombres négatifs) :
  // function nettoyerTableau(arr) {
  //   return arr.filter(Boolean);
  // }
  
  // Exemple d'utilisation :
  console.log(nettoyerTableau([NaN, 0, 15, false, -22, '', undefined, 47, null])); // Résultat: [15, -22, 47]

//Ex4:

function repeter(str, n = 1) {
    return str.repeat(n);
  }
  
  // Implémentation manuelle :
  // function repeter(str, n = 1) {
  //   let resultat = '';
  //   for (let i = 0; i < n; i++) {
  //     resultat += str;
  //   }
  //   return resultat;
  // }
  
  // Exemple d'utilisation :
  console.log(repeter('Ha!', 3)); // Résultat: "Ha!Ha!Ha!"


//Ex5:

const ligneDepart = '     ||<- Ligne de départ';
let tortue = '🐢';
let lievre = '🐇';

// Aligner les animaux sur la ligne de départ
tortue = tortue.padStart(9);
lievre = lievre.padStart(9);

console.log(ligneDepart);
console.log(tortue);  // Résultat: '       🐢'
console.log(lievre);  // Résultat: '       🐇'

// Que se passe-t-il avec trim() et padEnd()
tortue = tortue.trim().padEnd(9, '=');
console.log(tortue);  // Résultat: '🐢======='
