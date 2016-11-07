//
// Migration model
//
const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');

var UserModel = require('./users');
var ImageModel = require('./image');

const Migration = sequelize.define('migration', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
  },
  imageId: {
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
  path: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
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
Migration.belongsTo(ImageModel, { foreignKey: 'imageId' });

Migration.sync();

module.exports = Migration;
