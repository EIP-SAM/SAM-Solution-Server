//
// Model Save
//
module.exports = function initSaveModel(libs, models) {
  models.save = libs.sequelize.define('save', {
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
    hash: {
      type: libs.Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
  }, {
    freezeTableName: true,
  });

  //
  // Setup ForeignKeys
  //
  models.save.belongsTo(models.saveSchedule, { foreignKey: 'fk_save_schedule' });

  //
  // Sync model SaveSchedule
  //
  models.save.sync();
};
