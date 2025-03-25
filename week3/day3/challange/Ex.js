// Tableau d'objets représentant les planètes et leurs lunes
const solarSystem = [
    { name: "Mercure", color: "gray", moons: 0 },
    { name: "Vénus", color: "orange", moons: 0 },
    { name: "Terre", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturne", color: "yellow", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
  ];
  
  // Récupération de la section où ajouter les planètes
  const planetSection = document.querySelector('.listPlanets');
  
  // Création des planètes
  solarSystem.forEach((planet, index) => {
    // Création de la div pour la planète
    const planetDiv = document.createElement('div');
    planetDiv.className = 'planet';
    planetDiv.style.backgroundColor = planet.color;
    
    // Positionnement des planètes pour éviter le chevauchement
    planetDiv.style.marginLeft = `${index * 120}px`;
    
    // Ajout du nom de la planète
    planetDiv.textContent = planet.name;
    
    // Création des lunes pour cette planète
    for (let i = 0; i < planet.moons; i++) {
      const moonDiv = document.createElement('div');
      moonDiv.className = 'moon';
      
      // Position aléatoire pour les lunes autour de la planète
      const angle = (i / planet.moons) * 2 * Math.PI;
      const distance = 60; // distance du centre de la planète
      moonDiv.style.left = `${50 + Math.cos(angle) * distance - 15}px`;
      moonDiv.style.top = `${50 + Math.sin(angle) * distance - 15}px`;
      
      planetDiv.appendChild(moonDiv);
    }
    
    // Ajout de la planète à la section
    planetSection.appendChild(planetDiv);
  });