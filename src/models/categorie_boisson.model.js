import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const CategorieBoisson = sequelize.define(
  'categorieBoisson', {
  libelle: { type: Sequelize.STRING, allowNull: false },
  pathImage: { type: Sequelize.STRING, allowNull: true },

},
)

CategorieBoisson.associate = function (models) {
};

// create table with user model
CategorieBoisson.sync()
  .then(() => console.log('Table des Categories de Boissons created successfully'))
  .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default CategorieBoisson;