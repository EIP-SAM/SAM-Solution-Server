//
// Model SaveScheduled
//
var Sequelize = require('sequelize');
var sequelize = require('../libs/sequelize');

var user = require('./users');

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
saveScheduled.belongsTo(user, { foreignKey: 'userId' });

//
// Sync model SaveScheduled
//
saveScheduled.sync();

module.exports = saveScheduled;
