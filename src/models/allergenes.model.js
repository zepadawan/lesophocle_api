import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const Allergene = sequelize.define(
  'allergene', {
  numero: { type: Sequelize.INTEGER, allowNull: false },
  libelle: { type: Sequelize.STRING, allowNull: false },

},
)

Allergene.associate = function (models) {
};

// create table with user model
Allergene.sync()
  .then(() => console.log('Table des Allergenes created successfully'))
  .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default Allergene;