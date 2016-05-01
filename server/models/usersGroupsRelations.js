const sequelize = require('../libs/sequelize');
var Groups = require('./groups');
var Users = require('./users');

//
// Model UsersGroupsRelations
//
const UsersGroupsRelations = sequelize.define('usersGroupsRelations', {}, {
  freezeTableName: true,
});

//
// Setup Relations
//
Groups.belongsToMany(Users, { through: 'usersGroupsRelations', foreignKey: 'userId' });
Users.belongsToMany(Groups, { through: 'usersGroupsRelations', foreignKey: 'groupId' });

UsersGroupsRelations.sync();

module.exports = UsersGroupsRelations;
