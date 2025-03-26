// 1. Récupérer le h1 et l'afficher dans la console
const h1 = document.querySelector('h1');
console.log(h1);

// 2. Supprimer le dernier paragraphe
const paragraphs = document.querySelectorAll('article p');
const lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.remove();

// 3. Changer la couleur de fond du h2 au clic
const h2 = document.querySelector('h2');
h2.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

// 4. Masquer le h3 au clic
const h3 = document.querySelector('h3');
h3.addEventListener('click', function() {
    this.style.display = 'none';
});

// 5. Mettre tous les paragraphes en gras au clic du bouton
const boldBtn = document.getElementById('boldBtn');
boldBtn.addEventListener('click', function() {
    document.querySelectorAll('article p').forEach(p => {
        p.style.fontWeight = 'bold';
    });
});

// BONUS 1: Taille aléatoire pour h1 au survol
h1.addEventListener('mouseover', function() {
    const randomSize = Math.floor(Math.random() * 101); // 0-100
    this.style.fontSize = `${randomSize}px`;
});

// BONUS 2: Faire disparaître le 2ème paragraphe au survol
const secondParagraph = paragraphs[1];
secondParagraph.addEventListener('mouseover', function() {
    this.classList.add('fade-out');
});