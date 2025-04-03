const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Utiliser reduce() pour combiner tous les éléments en une seule chaîne
const epicStr = epic.reduce((accumulator, currentValue) => {
  return accumulator + ' ' + currentValue;
});

console.log(epicStr);
// Output: "a long time ago in a galaxy far far away"