// Importation des produits
const products = require('./products');

// Fonction de recherche de produit
function findProduct(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  
  if (product) {
    console.log("Produit trouvé :");
    console.log(`Nom: ${product.name}`);
    console.log(`Prix: ${product.price}€`);
    console.log(`Catégorie: ${product.category}`);
  } else {
    console.log(`Produit "${productName}" non trouvé.`);
  }
  console.log("-----------------");
}

// Tests de la fonction
findProduct("Ordinateur portable");
findProduct("Smartphone");
findProduct("Télévision"); // Ce produit n'existe pas
findProduct("Casque audio");