
var Sequelize = require('sequelize');
var sequelize = require('../libs/sequelize');

//
// Model Groups
//
var Groups = sequelize.define('groups', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  baseRights: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
  },
}, {
  freezeTableName: true,
});

Groups.sync();

module.exports = Groups;

var _ = require('./usersGroupsRelations');
