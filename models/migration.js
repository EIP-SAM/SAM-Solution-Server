//
// Migration model
//
const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');

const UserModel = require('./users');
const ImageModel = require('./image');

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
  comment: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false,
  },
}, {
  freezeTableName: true,
});

//
// Setup foreignKeys
//
Migration.belongsTo(UserModel, { foreignKey: 'userId' });
Migration.belongsTo(ImageModel, { foreignKey: 'imageId' });

module.exports = Migration;
