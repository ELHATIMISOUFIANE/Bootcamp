// Importation du module fs
const fs = require('fs');

// Fonction pour lire un fichier
function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(`Contenu du fichier ${filePath}:`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Erreur lors de la lecture du fichier ${filePath}:`, error.message);
    return null;
  }
}

// Fonction pour écrire dans un fichier
function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content);
    console.log(`Contenu écrit avec succès dans le fichier ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Erreur lors de l'écriture dans le fichier ${filePath}:`, error.message);
    return false;
  }
}

// Exportation des fonctions
module.exports = {
  readFile,
  writeFile
};