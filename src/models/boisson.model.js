import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const Boisson = sequelize.define(
  'boisson', {
  libelle: { type: Sequelize.STRING, allowNull: false },
  id_categorie: { type: Sequelize.INTEGER, allowNull: false },
  contenance: { type: Sequelize.STRING, allowNull: true },
  prix: { type: Sequelize.STRING, allowNull: true },
  pathImage: { type: Sequelize.STRING, allowNull: true },

},
)

Boisson.associate = function (models) {
};

// create table with user model
Boisson.sync()
  .then(() => console.log('Table des Boissons created successfully'))
  .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default Boisson;