const db = require("../models");
const Post = db.posts;

// Créer et enregistrer un nouveau post
exports.create = (req, res) => {
  // Validation de la requête
  if (!req.body.title || !req.body.content) {
    res.status(400).send({
      message: "Le titre et le contenu ne peuvent pas être vides!"
    });
    return;
  }

  // Création d'un objet Post
  const post = {
    title: req.body.title,
    content: req.body.content
  };

  // Enregistrement du post dans la base de données
  Post.create(post)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la création du post."
      });
    });
};

// Récupérer tous les posts de la base de données
exports.findAll = (req, res) => {
  Post.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération des posts."
      });
    });
};

// Trouver un post par son id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Post.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Impossible de trouver le post avec l'id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erreur lors de la récupération du post avec l'id=${id}`
      });
    });
};

// Mettre à jour un post identifié par son id
exports.update = (req, res) => {
  const id = req.params.id;

  Post.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le post a été mis à jour avec succès."
        });
      } else {
        res.status(404).send({
          message: `Impossible de mettre à jour le post avec l'id=${id}. Post non trouvé ou corps de la requête vide!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erreur lors de la mise à jour du post avec l'id=${id}`
      });
    });
};

// Supprimer un post avec l'id spécifié
exports.delete = (req, res) => {
  const id = req.params.id;

  Post.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le post a été supprimé avec succès!"
        });
      } else {
        res.status(404).send({
          message: `Impossible de supprimer le post avec l'id=${id}. Post non trouvé!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erreur lors de la suppression du post avec l'id=${id}`
      });
    });
};