//
// Model Groups
//
module.exports = function initGroupsModel(libs, conf, models) {
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
  // Sync Model Groups
  //
  Groups.sync();

  return Groups;
};
