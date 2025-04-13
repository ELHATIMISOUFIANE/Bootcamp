// Importation du module fs
const fs = require('fs');

// Répertoire à lire
const directoryPath = './'; // Pour lire le répertoire courant

try {
  // Lecture du contenu du répertoire
  const files = fs.readdirSync(directoryPath);
  
  console.log(`Liste des fichiers dans le répertoire '${directoryPath}':`);
  console.log('---------------------------------------------');
  
  // Affichage de chaque fichier avec des informations supplémentaires
  files.forEach((file, index) => {
    try {
      const stats = fs.statSync(`${directoryPath}${file}`);
      const type = stats.isDirectory() ? 'Dossier' : 'Fichier';
      const size = stats.size;
      
      console.log(`${index + 1}. ${file}`);
      console.log(`   Type: ${type}`);
      console.log(`   Taille: ${size} octets`);
      console.log('---------------------------------------------');
    } catch (err) {
      console.log(`${index + 1}. ${file} (Impossible d'obtenir les infos)`);
    }
  });
  
  console.log(`Total: ${files.length} fichiers/dossiers trouvés`);
  
} catch (error) {
  console.error(`Erreur lors de la lecture du répertoire: ${error.message}`);
}