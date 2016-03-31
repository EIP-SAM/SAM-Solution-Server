//
// Model User
//

module.exports = function initUsersModel(libs, conf) {
  const Users = libs.sequelize.define('users', {
    name: {
      type: libs.Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: libs.Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: libs.Sequelize.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });

  //
  // Setup Foreign Keys
  //
  const UsersGroups = initUsersGroupsModel(libs, conf);

  Users.belongsToMany(UsersGroups);

  //
  // Sync model User
  //

  Users.sync();
  return Users;
};
