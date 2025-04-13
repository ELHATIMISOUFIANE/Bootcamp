// Importation du module fs
const fs = require('fs');

try {
  // Lecture du fichier source
  console.log('Lecture du fichier source.txt...');
  const sourceData = fs.readFileSync('source.txt', 'utf8');
  console.log('Contenu du fichier source:');
  console.log(sourceData);
  
  // Écriture dans le fichier de destination
  console.log('\nCopie du contenu vers destination.txt...');
  fs.writeFileSync('destination.txt', sourceData);
  console.log('Copie terminée avec succès!');
  
  // Vérification de la copie
  const destinationData = fs.readFileSync('destination.txt', 'utf8');
  console.log('\nContenu du fichier de destination:');
  console.log(destinationData);
  
} catch (error) {
  console.error('Erreur lors de la copie du fichier:', error.message);
}