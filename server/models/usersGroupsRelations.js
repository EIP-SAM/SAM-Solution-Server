const sequelize = require('../libs/sequelize');
var Groups = require('./groups');
var Users = require('./users');

//
// Model UsersGroupsRelations
//
const UsersGroupsRelations = sequelize.define('UsersGroupsRelations', {}, {
    freezeTableName: true,
  });

//
// Setup Relations
//
Groups.belongsToMany(Users, { through: 'UsersGroupsRelations', foreignKey: 'userId' });
Users.belongsToMany(Groups, { through: 'UsersGroupsRelations', foreignKey: 'groupId' });

module.exports = UsersGroupsRelations;
