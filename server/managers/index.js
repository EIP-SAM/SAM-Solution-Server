module.exports = function initManagers(libs, conf, adapters) {
  const managers = {};

  require('./restore')(adapters, managers);

  return managers;
};
