const famille = {
    père: "Jean",
    mère: "Marie",
    enfant: "Léo",
  };
  
  // Clés
  for (let membre in famille) {
    console.log(membre); // père, mère, enfant
  }
  
  // Valeurs
  for (let membre in famille) {
    console.log(famille[membre]); // Jean, Marie, Léo
  }