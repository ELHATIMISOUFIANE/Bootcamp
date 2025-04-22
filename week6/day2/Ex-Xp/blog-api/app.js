const express = require("express");
const bodyParser = require("body-parser");

// Création de l'application Express
const app = express();

// Analyse les requêtes de type content-type - application/json
app.use(bodyParser.json());

// Analyse les requêtes de type content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Connexion à la base de données
const db = require("./server/models");
db.sequelize.sync()
  .then(() => {
    console.log("Base de données synchronisée.");
  })
  .catch((err) => {
    console.log("Échec de la synchronisation de la base de données : " + err.message);
  });

// Route simple pour tester
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API de livres." });
});

// Inclusion des routes
require("./server/routes/book.routes")(app);

// Gestion des routes inexistantes
app.use((req, res, next) => {
  res.status(404).send({
    message: "Route non trouvée."
  });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: "Erreur interne du serveur."
  });
});

// Définition du port et démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}.`);
}); 