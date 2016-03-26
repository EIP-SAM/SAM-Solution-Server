module.exports = function initNodeLibraries(conf) {
  const libs = {};

  require('./express')(libs, conf);
  require('./sequelize')(libs, conf);
  require('./sequelizeSession')(libs, conf);

  return libs;
};
