//
// Model SaveScheduled
//
var Sequelize = require('sequelize');
var sequelize = require('../libs/sequelize');

var UserModel = require('./users');

var saveScheduled = sequelize.define('save_scheduled', {
  cron: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  files: {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue: null,
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

//
// Sync model SaveScheduled
//
saveScheduled.sync();

module.exports = saveScheduled;
