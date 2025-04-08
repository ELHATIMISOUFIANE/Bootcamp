// Exercice 1: API Giphy
fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Un problème est survenu lors de la récupération des données:', error);
  });




// Exercice 2: API Giphy - 10 Gifs sur le "sun"
fetch('https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Un problème est survenu lors de la récupération des données:', error);
  });

  // Exercice 3: Fonction asynchrone
async function fetchStarWarsData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const objectStarWars = await response.json();
      console.log(objectStarWars.result);
    } catch (error) {
      console.error('Un problème est survenu lors de la récupération des données:', error);
    }
  }
  
  fetchStarWarsData();
 
 
 
  //Exercice 4: Analyser le code
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
  }

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();