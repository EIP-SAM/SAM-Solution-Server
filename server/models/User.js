module.exports = function initUserModel(libs, models) {
  models.user = libs.sequelize.define('User', {
    login: {
      type: libs.Sequelize.STRING,
    },
  });

  models.user.sync();
};
