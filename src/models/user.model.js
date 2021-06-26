import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const User = sequelize.define(
  'user', {
  firstname: { type: Sequelize.STRING, allowNull: true },
  lastname: { type: Sequelize.STRING, allowNull: true },
  username: { type: Sequelize.STRING, allowNull: true },
  sexe: { type: Sequelize.STRING, allowNull: true },
  email: { type: Sequelize.STRING, allowNull: true },
  tel: { type: Sequelize.STRING, allowNull: true },
  adresse: { type: Sequelize.STRING, allowNull: true },
  ville: { type: Sequelize.STRING, allowNull: true },
  cp: { type: Sequelize.STRING, allowNull: true },
  avatar: { type: Sequelize.STRING, allowNull: true },
  hash: { type: Sequelize.STRING, allowNull: false },
  role: { type: Sequelize.STRING, allowNull: true },
  date_naissance: { type: Sequelize.STRING, allowNull: true },
},
)

User.associate = function (models) {
  // associations go here
};

// create table with user model
User.sync()
  .then(() => console.log('Table des Users created successfully'))
  .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default User;