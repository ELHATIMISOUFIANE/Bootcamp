const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// Afficher les couleurs avec les ordinaux appropriés
colors.forEach((color, index) => {
  // Utiliser l'opérateur ternaire pour déterminer l'ordinal à utiliser
  // Si index+1 est entre 1 et 3, utiliser ordinal[index+1], sinon utiliser ordinal[0] (th)
  const suffix = (index + 1) >= 1 && (index + 1) <= 3 ? ordinal[index + 1] : ordinal[0];
  console.log(`${index + 1}${suffix} choice is ${color}.`);
});