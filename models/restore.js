//
// Model Restore
//
var Sequelize = require('sequelize');
var sequelize = require('../libs/sequelize');

var UserModel = require('./users');
var SaveScheduledModel = require('./saveScheduled');

var restore = sequelize.define('restore', {
    execDate: {
      type: Sequelize.DATE,
    },
    isStart: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isFinish: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isSuccess: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  }, {
    freezeTableName: true,
  });

//
// Setup ForeignKeys
//
restore.belongsTo(UserModel, { foreignKey: 'userId' });
restore.belongsTo(SaveScheduledModel, { foreignKey: 'saveScheduledId' });
UserModel.hasMany(restore);

//
// Sync model Restore
//
restore.sync();

module.exports = restore;
