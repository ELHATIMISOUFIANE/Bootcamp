const people = ["Greg", "Mary", "Devon", "James"];

// 1. Supprimer "Greg"
people.shift();

// 2. Remplacer "James" par "Jason"
people[people.indexOf("James")] = "Jason";

// 3. Ajouter votre nom
people.push("Alice");

// 4. Index de "Mary"
console.log(people.indexOf("Mary")); // 0

// 5. Copie sans "Mary" et "Alice"
const peopleCopy = people.slice(1, 3); // ["Devon", "Jason"]

// 6. Index de "Foo"
console.log(people.indexOf("Foo")); // -1 (non présent)

// 7. Dernier élément
const last = people[people.length - 1]; // "Alice"