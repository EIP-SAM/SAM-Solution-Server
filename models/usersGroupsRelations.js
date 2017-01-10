const sequelize = require('../libs/sequelize');
const Groups = require('./groups');
const Users = require('./users');

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

module.exports = UsersGroupsRelations;
