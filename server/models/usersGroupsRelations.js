//
// Model UsersGroupsRelations
//
module.exports = function initUsersGroupsRelationsModel(libs, conf, models) {
  const UsersGroupsRelations = libs.sequelize.define('UsersGroupsRelations', {}, {
    freezeTableName: true,
  });

  //
  // Setup Relations
  //
  models.Groups.belongsToMany(models.Users, { through: 'UsersGroupsRelations', foreignKey: 'userId' });
  models.Users.belongsToMany(models.Groups, { through: 'UsersGroupsRelations', foreignKey: 'groupId' });

  return UsersGroupsRelations;
};
