const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');

//
// Model Groups
//
const Groups = sequelize.define('groups', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  saveAndRestoreMode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
  },
  migrationMode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
  },
  softwarePackagesMode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
  },
}, {
  freezeTableName: true,
});

module.exports = Groups;
