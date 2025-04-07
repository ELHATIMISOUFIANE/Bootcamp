// Fonction 1 : toJs
function toJs() {
    return new Promise((resolve, reject) => {
      const morseJS = JSON.parse(`{
        "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
        "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
        "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
        "y": "-.--", "z": "--..", ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--", "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.",
        ")": "-.--.-"
      }`);
  
      if (Object.keys(morseJS).length === 0) {
        reject('L\'objet Morse est vide');
      } else {
        resolve(morseJS);
      }
    });
  }
  
  // Fonction 2 : toMorse
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      // Demande à l'utilisateur de saisir un mot ou une phrase
      const word = prompt("Entrez un mot ou une phrase :");
  
      const morseTranslation = word.split('').map(char => {
        const morseChar = morseJS[char.toLowerCase()];
        if (!morseChar) {
          throw new Error(`Le caractère "${char}" n'existe pas dans le code Morse`);
        }
        return morseChar;
      });
  
      resolve(morseTranslation);
    });
  }
  
  // Fonction 3 : joinWords
  function joinWords(morseTranslation) {
    return new Promise((resolve) => {
      const morseString = morseTranslation.join('\n');
      console.log(morseString);  // Affiche la traduction en code Morse
      resolve(morseString);
    });
  }
  
  // Chaînage des trois fonctions
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));  // Affiche une erreur si un caractère est manquant
  