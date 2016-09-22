//
// Model Save
//
var Sequelize = require('sequelize');
var sequelize = require('../libs/sequelize');

var SaveScheduledModel = require('./saveScheduled');

var save = sequelize.define('save', {
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
  canceled: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  hash: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
}, {
  freezeTableName: true,
});

//
// Setup ForeignKeys
//
save.belongsTo(SaveScheduledModel, { foreignKey: 'saveScheduledId' });
SaveScheduledModel.hasMany(save);

//
// Sync model Save
//
save.sync();

module.exports = save;
