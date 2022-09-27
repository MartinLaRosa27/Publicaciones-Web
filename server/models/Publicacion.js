const Sequelize = require("sequelize");
const dataBase = require("../database.js");

const Publicacion = dataBase.define("publicacion", {
  _id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  contenido: {
    type: Sequelize.STRING(90),
    allowNull: false,
    validate: {
      len: {
        args: [3, 144],
        msg: "El contenido de la publicacion debe tener entre 3 y 144 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "La rpublicacion no puede ir vacia",
      },
    },
  },
});

module.exports = Publicacion;
