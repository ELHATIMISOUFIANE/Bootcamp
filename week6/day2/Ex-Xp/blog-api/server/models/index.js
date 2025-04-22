const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Création d'une instance Sequelize avec les paramètres de configuration
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importation du modèle Post
db.posts = require("./post.model.js")(sequelize, Sequelize);

module.exports = db;    