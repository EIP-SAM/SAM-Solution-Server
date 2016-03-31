//
// Model UsersGroupsRelations
//
module.exports = function initUsersGroupsRelationsModel(libs, conf, models) {
  const UsersGroupsRelations = libs.sequelize.define('users_groups_relations', {}, {
    freezeTableName: true,
  });

  //
  // Setup Foreign Keys
  //
  models.Groups.belongsTo(UsersGroupsRelations);
  models.Users.belongsToMany(UsersGroupsRelations);
  UsersGroupsRelations.belongsTo(models.Users, { foreignKey: 'fk_user_id' });
  UsersGroupsRelations.belongsTo(models.Groups, { foreignKey: 'fk_group_id' });

  //
  // Sync Model UsersGroupsRelations
  //
  UsersGroups.sync();
  models.Users.sync();

  return UsersGroupsRelations;
};
