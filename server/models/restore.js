//
// Model Restore
//
module.exports = function initRestoreModel(libs, models) {
  models.restore = libs.sequelize.define('restore', {
    execDate: {
      type: libs.Sequelize.DATE,
    },
    isStart: {
      type: libs.Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isFinish: {
      type: libs.Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isSuccess: {
      type: libs.Sequelize.BOOLEAN,
      defaultValue: false,
    },
  }, {
    freezeTableName: true,
  });

  //
  // Setup ForeignKeys
  //
  models.restore.belongsTo(models.user, { foreignKey: 'fk_user' });
  models.restore.belongsTo(models.save, { foreignKey: 'fk_save' });

  //
  // Sync model Restore
  //
  models.restore.sync();
};
