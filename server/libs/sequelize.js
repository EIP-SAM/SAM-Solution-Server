module.exports = function initSequelize(libs, conf) {
  const dbConf = conf.dbConfig;

  libs.Sequelize = require('sequelize');
  libs.sequelize = new libs.Sequelize(
    dbConf.database,
    dbConf.username,
    dbConf.password,
    dbConf.options);
};
