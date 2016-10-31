//
// Migration model
//
const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');

var UserModel = require('./users');

const Migration = sequelize.define('migration', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
  },
  migrationDate: {
    type: Sequelize.DATE,
    allowNull: false,
    unique: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false,
  }
}, {
  freezeTableName: true,
});

//
// Setup foreignKeys
//
Migration.belongsTo(UserModel, { foreignKey: 'userId' });

Migration.sync();

module.exports = Migration;
