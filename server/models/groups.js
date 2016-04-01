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
    baseRights: {
      type: libs.Sequelize.INTEGER,
      allowNull: false,
      unique: false,
    },
  }, {
    freezeTableName: true,
  });

  return Groups;
};
