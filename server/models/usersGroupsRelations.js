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
  models.Groups.belongsToMany(models.Users, { through: 'users_groups_relations', foreignKey: 'fk_group_id' });
  models.Users.belongsToMany(models.Groups, { through: 'users_groups_relations', foreignKey: 'fk_user_id' });

  //
  // Sync Model UsersGroupsRelations
  //
  UsersGroupsRelations.sync();
  models.Users.sync();
  models.Groups.sync();

  return UsersGroupsRelations;
};
