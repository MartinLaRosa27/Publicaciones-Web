const Publicacion = require("../models/Publicacion.js");
// const Usuario = require("../models/Usuario.js");

exports.getPublicacion = async (req, res) => {
  // const usuario = await Usuario.findAll({ include: Publicacion });
  const publicacion = await Publicacion.findAll();
  res.send(publicacion);
};

exports.getPublicacionId = async (req, res) => {
  const usuario = await Publicacion.findAll({
    where: {
      usuarioId: req.params.id,
    },
  });
  res.send(usuario);
};

exports.deletePublicacion = async (req, res) => {
  const _id = req.params.id;
  const iCount = await Publicacion.count();
  try {
    await Publicacion.destroy({ where: { _id } });
    const uCount = await Publicacion.count();
    if (uCount < iCount) {
      res.send("Publicacion eliminada");
    } else {
      res.send("No se pudo eliminar la Publicacion");
    }
  } catch (e) {
    res.send("No se pudo eliminar la Publicacion");
  }
};

exports.postPublicacion = async (req, res) => {
  const { contenido } = req.body;
  try {
    await Publicacion.create({
      contenido,
    });
    res.send("Publicacion creada");
  } catch (e) {
    res.send(e.errors[0].message);
  }
};
