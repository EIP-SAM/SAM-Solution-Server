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

  return Groups;
};
