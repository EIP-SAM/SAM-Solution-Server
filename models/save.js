//
// Model Save
//
const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');

const SaveScheduledModel = require('./saveScheduled');

const save = sequelize.define('save', {
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

module.exports = save;
