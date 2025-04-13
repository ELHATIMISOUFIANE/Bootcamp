// Importation du module chalk
const chalk = require('chalk');

// Utilisation de chalk pour colorer le texte
console.log(chalk.blue('Bonjour en bleu!'));
console.log(chalk.green('Ceci est un texte vert'));
console.log(chalk.red.bold('Attention: texte rouge et gras!'));

// Combinaison de styles
console.log(chalk.bgYellow.black('Texte noir sur fond jaune'));

// Message coloré complexe
console.log(chalk.cyan('-------------------------------------'));
console.log(`${chalk.bold('Titre:')} ${chalk.magenta('Mon Application Node.js')}`);
console.log(`${chalk.bold('Version:')} ${chalk.green('1.0.0')}`);
console.log(`${chalk.bold('Auteur:')} ${chalk.blue('Votre Nom')}`);
console.log(chalk.cyan('-------------------------------------'));

// Création d'un petit arc-en-ciel
console.log(
  chalk.red('R') +
  chalk.yellow('a') +
  chalk.green('i') +
  chalk.blue('n') +
  chalk.magenta('b') +
  chalk.cyan('o') +
  chalk.white('w')
);