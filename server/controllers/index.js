module.exports = function initControllers(libs, conf, managers) {
  const controllers = {};

  require('./restore')(managers, controllers);
  require('./save')(managers, controllers, libs);

  return controllers;
};
