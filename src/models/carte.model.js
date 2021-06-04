import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const Carte = sequelize.define(
  'carte', {
  libelle: { type: Sequelize.STRING, allowNull: false },
},
)

Carte.associate = function (models) {
};

// create table with user model
Carte.sync()
  .then(() => console.log('Table des Cartes created successfully'))
  .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default Carte;