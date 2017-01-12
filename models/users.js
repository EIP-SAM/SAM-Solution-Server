const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');

//
// Model User
//
const Users = sequelize.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    default: false,
  },
}, {
  freezeTableName: true,
});

module.exports = Users;
