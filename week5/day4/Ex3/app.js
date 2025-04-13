// Importation du module fileManager
const fileManager = require('./fileManager');

// Lire le contenu du fichier "Hello World.txt"
const content = fileManager.readFile('Hello World.txt');

// Écrire dans le fichier "Bye World.txt"
if (content !== null) {
  fileManager.writeFile('Bye World.txt', 'Writing to the file');
  
  // Vérifier le nouveau contenu
  fileManager.readFile('Bye World.txt');
}