//
// Model rights
//

module.exports = function initRightsModel(libs, conf) {
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
  // Setup Foreign Keys
  //
  const RightsGroups = initRightsModel(libs, conf);

  Rights.belongsTo(RightsGroups);

  //
  // Sync Model Rights
  //

  Rights.sync();
  return Rights;
};
