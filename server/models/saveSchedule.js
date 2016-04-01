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
    isActive: {
      type: libs.Sequelize.BOOLEAN,
      defaultValue: true,
    },
  }, {
    freezeTableName: true,
  });

  //
  // Setup ForeignKeys
  //
  models.saveSchedule.belongsTo(models.user, { foreignKey: 'userId' });

  //
  // Sync model SaveSchedule
  //
  models.saveSchedule.sync();
};
