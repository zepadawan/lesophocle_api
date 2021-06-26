import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const Evenement = sequelize.define(
  'evenement', {
  date: { type: Sequelize.DATE, allowNull: false },
  prix: { type: Sequelize.STRING, allowNull: false },
  heuredebut: { type: Sequelize.STRING, allowNull: true },
  heurefin: { type: Sequelize.STRING, allowNull: true },
  dinerdebut: { type: Sequelize.STRING, allowNull: true },
  nbpersmax: { type: Sequelize.INTEGER, allowNull: true },
  description: { type: Sequelize.TEXT, allowNull: true },
  infossup: { type: Sequelize.TEXT, allowNull: true },
  image: { type: Sequelize.STRING, allowNull: true },
},
)

Evenement.associate = function (models) {
};

// create table with user model
Evenement.sync()
  .then(() => console.log('Table des Evenements created successfully'))
  .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default Evenement;