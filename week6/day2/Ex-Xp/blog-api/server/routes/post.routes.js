module.exports = app => {
    const posts = require("../controllers/post.controller.js");
    const router = require("express").Router();
  
    // Créer un nouveau post
    router.post("/", posts.create);
  
    // Récupérer tous les posts
    router.get("/", posts.findAll);
  
    // Récupérer un post spécifique
    router.get("/:id", posts.findOne);
  
    // Mettre à jour un post
    router.put("/:id", posts.update);
  
    // Supprimer un post
    router.delete("/:id", posts.delete);
  
    // Préfixe des routes API
    app.use('/posts', router);
  };