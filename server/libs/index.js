module.exports = function initNodeLibraries(conf) {
  const libs = {};

  require('./express')(libs, conf);
  require('./sequelize')(libs, conf);
  require('./sequelizeSession')(libs, conf);
  require('./sha256')(libs, conf);
  require('./passport')(libs, conf);
  require('./connectEnsureLogin')(libs, conf);
  require('./ejs')(libs, conf);

  return libs;
};
