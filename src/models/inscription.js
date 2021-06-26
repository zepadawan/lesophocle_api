
import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const Inscription = sequelize.define(
  'inscription', {
  id_client: { type: Sequelize.INTEGER, allowNull: false },
  id_evenment: { type: Sequelize.INTEGER, allowNull: false },
  nbpersonnes: { type: Sequelize.INTEGER, allowNull: false },
},
)

Inscription.associate = function (models) {
};

// create table with user model
Inscription.sync()
  .then(() => console.log('Table des Inscriptions created successfully'))
  .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default Categorie;