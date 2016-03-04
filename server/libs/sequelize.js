var dbConfig = require('../config/config.json').dbConfig;

var Sequelize = require('sequelize');

module.exports = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    dbConfig.options
  );
