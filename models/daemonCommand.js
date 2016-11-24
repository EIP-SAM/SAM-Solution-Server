//
// DaemonCommand model
//
const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');

const UserModel = require('./users');

const DaemonCommand = sequelize.define('daemon_command', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
  },
  commandName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
});

//
// Setup foreignKeys
//
DaemonCommand.belongsTo(UserModel, { foreignKey: 'userId' });

module.exports = DaemonCommand;
