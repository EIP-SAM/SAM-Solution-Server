//
// Model Groups
//

module.exports = function initGroupsModel(libs, conf) {
  const Groups = libs.sequelize.define('groups', {
    name: {
      type: libs.Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    rights: {
      type: libs.Sequelize.INTEGER,
      allowNull: false,
      unique: false,
    },
  }, {
    freezeTableName: true,
  });

  //
  // Setup Foreign Keys
  //

  const UsersGroups = initUsersGroupsModel(libs, conf);
  const RightsGroups = initRightsGroupsModel(libs, conf);

  Groups.belongsTo(UsersGroups);
  Groups.belongsTo(RightsGroups);

  //
  // Sync Model Groups
  //

  Groups.sync();
  return Groups;
};
