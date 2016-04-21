var Sequelize = require('sequelize');
var sequelize = require('../libs/sequelize');

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
}, {
  freezeTableName: true,
});

Users.sync();

module.exports =  Users;

var _ = require('./usersGroupsRelations');
