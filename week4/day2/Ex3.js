// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// L'opérateur spread (...) décompose les tableaux et insère leurs éléments individuellement

// ------2------
const country = "USA";
console.log([...country]);
// Output: ['U', 'S', 'A']
// L'opérateur spread sur une chaîne la décompose en un tableau de caractères

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// Output: [undefined, undefined]
// Le tableau [,,] a deux emplacements vides (qui contiennent undefined)
// L'opérateur spread les décompose en deux éléments undefined distincts