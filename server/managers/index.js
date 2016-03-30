module.exports = function initManagers(libs, conf, adapters) {
  const managers = {};

  require('logManager')(adapters, managers);

  return managers;
};
