

//Ex1: Le tableau résultant sera [2, 4, 6].
//Ex2: Le tableau résultant sera [1, 2, 0, 1, 2, 3].
//Ex3: newArray contient [2, 4, 8, 10, 16, 18] (chaque num multiplié par 2). i prend successivement les valeurs 0, 1, 2, 3, 4, 5.


//Ex4
// 1. Modifier array pour obtenir [1,2,3,[4],[5]]
const array = [[1],[2],[3],[[[4]]],[[[5]]]];

// Solution avec flat() - une seule ligne
const modifiedArray = array.map(item => item.flat(2));
console.log(modifiedArray); // [1,2,3,[4],[5]]

// 2. Modifier greeting pour obtenir ["Hello young grasshopper!","you are","learning fast!"]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

// Solution avec join()
const modifiedGreeting = greeting.map(item => item.join(' '));
console.log(modifiedGreeting); // ["Hello young grasshopper!","you are","learning fast!"]

// 3. Transformer greeting en une chaîne de caractères
const greetingString = modifiedGreeting.join(' ');
console.log(greetingString); // "Hello young grasshopper! you are learning fast!"

// 4. Libérer le nombre 3 du tableau deeply nested
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

// Solution avec flat() et Infinity comme profondeur
const freed = trapped.flat(Infinity);
console.log(freed); // [3]
