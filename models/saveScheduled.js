//
// Model SaveScheduled
//
const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');

const UserModel = require('./users');

const saveScheduled = sequelize.define('save_scheduled', {
  cron: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  files: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
}, {
  freezeTableName: true,
});

//
// Setup ForeignKeys
//
saveScheduled.belongsTo(UserModel, { foreignKey: 'userId' });
UserModel.hasMany(saveScheduled);

module.exports = saveScheduled;
