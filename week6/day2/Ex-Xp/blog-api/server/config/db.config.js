// Configuration de la connexion à la base de données PostgreSQL
module.exports = {
    HOST: "localhost",      // Serveur de la base de données
    USER: "postgres",       // Nom d'utilisateur PostgreSQL
    PASSWORD: "1234",   // Mot de passe PostgreSQL
    DB: "blogdb",           // Nom de la base de données
    dialect: "postgres",    // Type de base de données
    pool: {
      max: 5,               // Nombre maximum de connexions dans le pool
      min: 0,               // Nombre minimum de connexions dans le pool
      acquire: 30000,       // Temps maximum en ms pour acquérir une connexion
      idle: 10000           // Temps maximum en ms qu'une connexion peut être inactive
    }
  };