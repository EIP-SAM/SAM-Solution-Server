//
// Image model
//
const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');

var MigrationModel = require('./migration');

const Image = sequelize.define('image', {
  migrationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  operatingSystem: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  version: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  }
}, {
  freezeTableName: true,
});

//
// Setup foreignKeys
//
Image.belongsTo(MigrationModel, { foreignKey: 'migrationId' });

//
// Synchronise with database
//
Image.sync();

module.exports = Image;
