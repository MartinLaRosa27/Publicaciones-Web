const Sequelize = require("sequelize");
const dataBase = require("../database.js");
const Publicacion = require("./Publicacion.js");

const Usuario = dataBase.define("usuario", {
  _id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  username: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      len: {
        args: [3, 30],
        msg: "El nombre de usuario debe tener entre 3 y 30 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "El nombre de usuario no puede ir vacio",
      },
      notContains: {
        args: " ",
        msg: "El nombre de usuario no puede tener espacios en blanco",
      },
      unique: {
        args: true,
        msg: "Usuario ya registrado",
      },
    },
  },

  password: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      len: {
        args: [3, 30],
        msg: "El password debe tener entre 3 y 30 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "El password no puede ir vacio",
      },
      notContains: {
        args: " ",
        msg: "El password no puede tener espacios en blanco",
      },
    },
  },
});
Usuario.hasMany(Publicacion);
module.exports = Usuario;
