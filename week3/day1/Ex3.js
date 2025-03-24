let number;
do {
  number = prompt("Entrez un nombre supérieur ou égal à 10");
  number = Number(number); // Conversion en nombre
} while (number < 10);