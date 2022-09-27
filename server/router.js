const express = require("express");
const router = express.Router();
const publicacionController = require("./controllers/PublicacionController.js");

module.exports = () => {
  router.get("/get-publicacion", publicacionController.getPublicacion);
  router.get("/get-publicacion/:id", publicacionController.getPublicacionId);
  router.delete(
    "/delete-publicacion/:id",
    publicacionController.deletePublicacion
  );
  router.post("/post-publicacion", publicacionController.postPublicacion);

  return router;
};
