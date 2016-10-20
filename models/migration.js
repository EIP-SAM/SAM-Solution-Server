//
// Migration model
//
const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');

const Migration = sequelize.define('migration', {
  userId: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    unique: false,
  },
  migrationDate: {
    type: Sequelize.DATE,
    allowNull: false,
    unique: false,
  },
  status: {
    type: Sequelize.ENUM,
    values: ['done', 'cancelled', 'pending', 'in progress'],
  }
}, {
  freezeTableName: true,
});

Migration.sync();

module.exports = Migration;
