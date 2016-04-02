module.exports = function initManagers(libs, conf, adapters) {
  const managers = {};

  require('./statistic')(adapters, managers);

  return managers;
};
