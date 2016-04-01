module.exports = function initManagers(libs, conf, adapters) {
  const managers = {};

  require('./restore')(adapters, managers);
  require('./save')(adapters, managers, libs);

  return managers;
};
