module.exports = function initControllers(libs, conf, managers) {
  const controllers = {};

  require('./restore')(managers, controllers);

  return controllers;
};
