const { DataTypes } = require('sequelize');

//sequelize es la isntancia que recibe
module.exports = (sequelize) => {
   //a partir de esa instancia definimos al modelo
   sequelize.define('User', {
      //atributos
      id : {
         type: DataTypes.INTEGER, //tipo de dato
         allowNull: false, //contraist
         primaryKey: true
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      },
   }, { timestamps: false }); //propiedad para eliminar los campos por default create y update
};
