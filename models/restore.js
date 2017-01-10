//
// Model Restore
//
const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');

const UserModel = require('./users');
const SaveModel = require('./save');

const restore = sequelize.define('restore', {
  execDate: {
    type: Sequelize.DATE,
  },
  files: {
    type: Sequelize.TEXT,
    allowNull: false,
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
UserModel.hasMany(restore);
restore.belongsTo(SaveModel, { foreignKey: 'saveId' });

module.exports = restore;
