//
// Model UsersGroups
//

module.exports = function initUsersGroupsModel(libs, conf) {
  const UsersGroups = libs.sequelize.define('usersGroups', },
  {
    freezeTableName: true,
  });
  }

  //
  // Setup Foreign Keys
  //

  const Users = initUsersModel(libs, conf);
  const Groups = initGroupsModel(libs, conf);

  UsersGroups.belongsTo(Users, {foreign:key: 'userId'});
  UsersGroups.belongsTo(Groups, {foreign:key: 'groupId'});

  //
  // Sync Model usersGroups
  //

  UsersGroups.sync();
  return UsersGroups;
}
