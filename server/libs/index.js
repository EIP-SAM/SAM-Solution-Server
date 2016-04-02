module.exports = function initNodeLibraries(conf) {
  const libs = {};

  require('./express')(libs, conf);
  require('./sequelize')(libs, conf);
  require('./sequelize-session')(libs, conf);
  require('./statistic')(libs, conf);

  return libs;
};
