const conf = require('../config/base.config.json');
const dbConf = conf.dbConfig;

var Sequelize = require('sequelize');
var sequelize = new Sequelize(
  dbConf.database,
  dbConf.username,
  dbConf.password,
  dbConf.options);

module.exports = sequelize;
