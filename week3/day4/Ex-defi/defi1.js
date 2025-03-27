document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('libform');
    const storySpan = document.getElementById('story');
    const shuffleButton = document.getElementById('shuffle-button');
    
    // Cache le bouton shuffle au début
    shuffleButton.style.display = 'none';
    
    // Tableau pour stocker les différentes histoires possibles
    const stories = [
      (noun, adjective, person, verb, place) => 
        `Once upon a time, there was a ${adjective} ${noun} named ${person} who loved to ${verb} in ${place}.`,
      
      (noun, adjective, person, verb, place) => 
        `${person} had a ${adjective} ${noun} that would always ${verb} when they went to ${place}.`,
        
      (noun, adjective, person, verb, place) => 
        `In the magical land of ${place}, ${person} found a ${adjective} ${noun} that could ${verb} on command.`,
        
      (noun, adjective, person, verb, place) => 
        `"Stop!" cried ${person} as the ${adjective} ${noun} began to ${verb} wildly in the middle of ${place}.`,
        
      (noun, adjective, person, verb, place) => 
        `Nobody in ${place} believed that ${person}'s ${noun} could ${verb}, until they saw its ${adjective} powers.`
    ];
    
    let currentStoryIndex = 0;
    let userInputs = {};
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Récupère les valeurs des inputs
      const noun = document.getElementById('noun').value;
      const adjective = document.getElementById('adjective').value;
      const person = document.getElementById('person').value;
      const verb = document.getElementById('verb').value;
      const place = document.getElementById('place').value;
      
      // Vérifie que les champs ne sont pas vides
      if (!noun || !adjective || !person || !verb || !place) {
        alert('Please fill in all fields!');
        return;
      }
      
      // Stocke les valeurs pour le shuffle
      userInputs = { noun, adjective, person, verb, place };
      
      // Génère et affiche la première histoire
      currentStoryIndex = 0;
      storySpan.textContent = stories[currentStoryIndex](noun, adjective, person, verb, place);
      
      // Affiche le bouton shuffle
      shuffleButton.style.display = 'inline';
    });
    
    shuffleButton.addEventListener('click', function() {
      if (!userInputs.noun) return; // Si aucun input n'a été saisi
      
      // Passe à l'histoire suivante (ou retourne à la première)
      currentStoryIndex = (currentStoryIndex + 1) % stories.length;
      
      // Génère et affiche la nouvelle histoire
      storySpan.textContent = stories[currentStoryIndex](
        userInputs.noun, 
        userInputs.adjective, 
        userInputs.person, 
        userInputs.verb, 
        userInputs.place
      );
    });
  });