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
  saveAndRestoreMode: {
    type: Sequelize.CHAR,
    allowNull: false,
    unique: false,
  },
  migrationMode: {
    type: Sequelize.CHAR,
    allowNull: false,
    unique: false,
  },
  softwarePackagesMode: {
    type: Sequelize.CHAR,
    allowNull: false,
    unique: false,
  },
}, {
  freezeTableName: true,
});

Groups.sync().then();

module.exports = Groups;
