const conf = require('../config/base.config.json');
const Sequelize = require('sequelize');

const dbConf = conf.dbConfig;
const sequelize = new Sequelize(
  dbConf.database,
  dbConf.username,
  dbConf.password,
  dbConf.options);

module.exports = sequelize;
