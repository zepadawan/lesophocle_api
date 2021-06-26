import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const Client = sequelize.define(
  'client', {
  firstname: { type: Sequelize.STRING, allowNull: true },
  lastname: { type: Sequelize.STRING, allowNull: false },
  username: { type: Sequelize.STRING, allowNull: true },
  sexe: { type: Sequelize.STRING, allowNull: true },
  email: { type: Sequelize.STRING, allowNull: false },
  tel: { type: Sequelize.STRING, allowNull: true },
  adresse: { type: Sequelize.STRING, allowNull: true },
  ville: { type: Sequelize.STRING, allowNull: true },
  cp: { type: Sequelize.STRING, allowNull: true },
  avatar: { type: Sequelize.STRING, allowNull: true },
  hash: { type: Sequelize.STRING, allowNull: true },
  role: { type: Sequelize.STRING, allowNull: true },
  naissance: { type: Sequelize.STRING, allowNull: true },
},
)

Client.associate = function (models) {
  // associations go here
};

// create table with user model
Client.sync()
  .then(() => console.log('Table des Clients created successfully'))
  .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default Client;