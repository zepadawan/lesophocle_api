import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const MenuJour = sequelize.define(
  'menujour', {
  prixdujour: { type: Sequelize.STRING, allowNull: false },
  menuviande: { type: Sequelize.STRING, allowNull: false },
  menupoisson: { type: Sequelize.STRING, allowNull: false },
  prixformule: { type: Sequelize.STRING, allowNull: false },
  prixmenu: { type: Sequelize.STRING, allowNull: false },

  libellesugg1: { type: Sequelize.STRING, allowNull: true },
  prixsugg1: { type: Sequelize.STRING, allowNull: true },
  descsugg1: { type: Sequelize.STRING, allowNull: true },

  libellesugg2: { type: Sequelize.STRING, allowNull: true },
  prixsugg2: { type: Sequelize.STRING, allowNull: true },
  descsugg2: { type: Sequelize.STRING, allowNull: true },

  libellesugg3: { type: Sequelize.STRING, allowNull: true },
  prixsugg3: { type: Sequelize.STRING, allowNull: true },
  descsugg3: { type: Sequelize.STRING, allowNull: true },
},
)

MenuJour.associate = function (models) {
};

// create table with user model
MenuJour.sync()
  .then(() => console.log('Table des MenuJour created successfully'))
  .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default MenuJour;