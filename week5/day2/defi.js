// Clé API Giphy
const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// Éléments DOM
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const clearAllBtn = document.getElementById('clear-all');
const gifsContainer = document.getElementById('gifs-container');
const errorMessage = document.getElementById('error-message');

// Événements
searchBtn.addEventListener('click', searchGif);
clearAllBtn.addEventListener('click', clearAllGifs);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchGif();
    }
});

// Fonction pour rechercher un GIF aléatoire selon la catégorie
async function searchGif() {
    const searchTerm = searchInput.value.trim();
    
    if (!searchTerm) {
        displayError('Veuillez entrer un terme de recherche');
        return;
    }
    
    try {
        // Construire l'URL de l'API
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(searchTerm)}`;
        
        // Effectuer la requête
        const response = await fetch(url);
        const data = await response.json();
        
        // Vérifier si la requête a réussi
        if (data.meta.status !== 200 || !data.data || !data.data.images) {
            displayError('Aucun GIF trouvé pour cette recherche');
            return;
        }
        
        // Ajouter le GIF à la page
        addGifToPage(data.data);
        
        // Effacer le champ de recherche et le message d'erreur
        searchInput.value = '';
        errorMessage.textContent = '';
        
    } catch (error) {
        displayError('Erreur lors de la récupération du GIF. Veuillez réessayer.');
        console.error('Erreur:', error);
    }
}

// Fonction pour ajouter un GIF à la page
function addGifToPage(gifData) {
    // Créer une carte pour le GIF
    const gifCard = document.createElement('div');
    gifCard.className = 'gif-card';
    
    // Obtenir l'URL du GIF depuis les données
    const gifUrl = gifData.images.fixed_height.url;
    
    // Créer l'élément image
    const img = document.createElement('img');
    img.src = gifUrl;
    img.alt = gifData.title || 'GIF Aléatoire';
    
    // Créer le bouton de suppression
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'SUPPRIMER';
    deleteBtn.addEventListener('click', () => {
        gifCard.remove();
    });
    
    // Ajouter les éléments à la carte
    gifCard.appendChild(img);
    gifCard.appendChild(deleteBtn);
    
    // Ajouter la carte au conteneur de GIFs
    gifsContainer.appendChild(gifCard);
}

// Fonction pour supprimer tous les GIFs
function clearAllGifs() {
    gifsContainer.innerHTML = '';
}

// Fonction pour afficher un message d'erreur
function displayError(message) {
    errorMessage.textContent = message;
    
    // Effacer le message d'erreur après 3 secondes
    setTimeout(() => {
        errorMessage.textContent = '';
    }, 3000);
}
