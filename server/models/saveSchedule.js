//
// Model SaveSchedule
//
var Sequelize = require('sequelize');
var sequelize = require('../libs/sequelize');

var user = require('./users');

var saveSchedule = sequelize.define('save_schedule', {
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
saveSchedule.belongsTo(user, { foreignKey: 'userId' });

//
// Sync model SaveSchedule
//
saveSchedule.sync();

module.exports = saveSchedule;
