//
// Model SaveSchedule
//
module.exports = function initSaveScheduleModel(libs, models) {
  models.saveSchedule = libs.sequelize.define('save_schedule', {
    cron: {
      type: libs.Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    files: {
      type: libs.Sequelize.TEXT,
      allowNull: true,
      defaultValue: null,
    },
  }, {
    freezeTableName: true,
  });

  //
  // Setup ForeignKeys
  //
  models.saveSchedule.belongsTo(models.user, { foreignKey: 'fk_user' });

  //
  // Sync model SaveSchedule
  //
  models.saveSchedule.sync();
};
