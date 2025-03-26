//part 1
setTimeout(function() {
    alert("Bonjour le monde");
  }, 2000);

//Part 2 

setTimeout(function() {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Bonjour le monde';
    container.appendChild(newParagraph);
  }, 2000);

  //part 3

  let counter = 0;
const intervalId = setInterval(function() {
  const container = document.getElementById('container');
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'Bonjour le monde';
  container.appendChild(newParagraph);
  
  counter++;
  
  // Arrêter après 5 paragraphes
  if (counter >= 5) {
    clearInterval(intervalId);
  }
}, 2000);

// Arrêter au clic du bouton
document.getElementById('clear').addEventListener('click', function() {
  clearInterval(intervalId);
});