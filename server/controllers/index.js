module.exports = function initControllers(libs, conf, managers) {
  const controllers = {};

  require('./statistic')(managers, controllers, libs);

  return controllers;
};
