//
// Model SaveSchedule
//
var Sequelize = require('sequelize');
var sequelize = require('../libs/sequelize');

var user = require('./user');

var saveSchedule = libs.sequelize.define('save_schedule', {
  cron: {
    type: libs.Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  files: {
    type: libs.Sequelize.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  isActive: {
    type: libs.Sequelize.BOOLEAN,
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
