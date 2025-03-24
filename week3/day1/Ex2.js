const colors = ["blue", "red", "green", "yellow", "purple"];
const suffixes = ["er", "ème", "ème", "ème", "ème"]; // Bonus

for (let i = 0; i < colors.length; i++) {
  const suffix = i === 0 ? "er" : "ème"; // Alternative au tableau
  console.log(`Mon ${i + 1}${suffix} choix est ${colors[i]}`);
}