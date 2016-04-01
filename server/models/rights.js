//
// Model rights
//
module.exports = function initRightsModel(libs, conf, models) {
  const Rights = libs.sequelize.define('rights', {
    data: {
      type: libs.Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
  }, {
    freezeTableName: true,
  });

  //
  // Setup Relations
  //
  models.Groups.hasMany(Rights);

  return Rights;
};
