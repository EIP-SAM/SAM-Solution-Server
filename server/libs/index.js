module.exports = function initNodeLibraries(conf) {
  const libs = {};

  require('./express')(libs, conf);
  require('./sequelize')(libs, conf);
  require('./sequelize-session')(libs, conf);
  require('./nodeSchedule')(libs);
  require('./nodegit')(libs);
  require('./connectFlash')(libs);

  return libs;
};
