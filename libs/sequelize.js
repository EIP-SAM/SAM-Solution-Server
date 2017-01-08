const conf = require('../config/base.config.json');
const dbConf = conf.dbConfig;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  dbConf.database,
  dbConf.username,
  dbConf.password,
  dbConf.options);

module.exports = sequelize;
