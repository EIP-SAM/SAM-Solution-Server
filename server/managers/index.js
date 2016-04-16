module.exports = function initManagers(libs, conf, adapters) {
  const managers = {};

  require('./log')(adapters, managers);

  return managers;
};
