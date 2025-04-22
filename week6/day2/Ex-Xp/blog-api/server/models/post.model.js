// Définition du modèle Post pour la table posts dans la base de données
module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    });
  
    return Post;
  };