const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const initials = names
  .sort() // Trie par ordre alphabétique
  .map(name => name[0]) // Récupère la première lettre
  .join(""); // Combine en une chaîne

console.log(initials); // "ABJKPS"