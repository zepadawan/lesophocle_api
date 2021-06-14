import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const Plat = sequelize.define(
  'plat', {
  libelle: { type: Sequelize.STRING, allowNull: false },
  id_categorie: { type: Sequelize.INTEGER, allowNull: false },
  prix: { type: Sequelize.STRING, allowNull: false },
  ordre: { type: Sequelize.INTEGER, allowNull: true },
  poids_dimension: { type: Sequelize.STRING, allowNull: true },
  description: { type: Sequelize.STRING, allowNull: true },
  sous_titre: { type: Sequelize.STRING, allowNull: true },
  nom_image: { type: Sequelize.STRING, allowNull: true },
  actif: { type: Sequelize.INTEGER, allowNull: true },
  allergenes: { type: Sequelize.STRING, allowNull: true },

},
)

Plat.associate = function (models) {
};

// create table with user model
Plat.sync()
  .then(() => console.log('Table des Plats created successfully'))
  .catch(err => console.log('oooh, did you enter wrong database credentials? = ' + err));

export default Plat;