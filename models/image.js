//
// Image model
//
const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');

const Image = sequelize.define('image', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  fileName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
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
  },
}, {
  freezeTableName: true,
});

module.exports = Image;
