const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Afficher les couleurs dans l'ordre indiqué
for (let i = 0; i < colors.length; i++) {
  console.log(`${i+1}# choice is ${colors[i]}.`);
}

// 2. Vérifier si un élément est égal à "Violet"
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}