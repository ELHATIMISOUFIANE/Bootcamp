//Ex1:
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//EX2:
function displayStudentInfo(objUser) {
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


//Ex3:

//Transformation initiale en tableau :

javascript
Copier
const users = { user1: 18273, user2: 92833, user3: 90315 };
const userArray = Object.entries(users);
console.log(userArray);


//Multiplier l'ID de chaque utilisateur par 2 :

javascript
Copier
const modifiedUsers = Object.entries(users).map(([user, id]) => [user, id * 2]);
console.log(modifiedUsers);

//Ex4:
//object


//Ex5:
// Option 2 : Correcte (appelle correctement `super(name)`)
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };



//Ex6:
//[2] === [2] // Faux, car les tableaux sont des types de référence et pointent vers des emplacements mémoire différents.
//{} === {} // Faux, car chaque objet vide est une instance différente.