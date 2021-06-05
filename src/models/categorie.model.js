import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const Categorie = sequelize.define(
  'categorie', {
  libelle: { type: Sequelize.STRING, allowNull: false },
  pathImage: { type: Sequelize.STRING, allowNull: false },

},
)

Categorie.associate = function (models) {
};

// create table with user model
Categorie.sync()
  .then(() => console.log('Table des Categories created successfully'))
  .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default Categorie;