//
// Model Restore
//
var Sequelize = require('sequelize');
var sequelize = require('../libs/sequelize');

var user = require('./user');
var save = require('./save');

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
restore.belongsTo(user, { foreignKey: 'userId' });
restore.belongsTo(save, { foreignKey: 'saveId' });

//
// Sync model Restore
//
restore.sync();

module.exports = restore;
