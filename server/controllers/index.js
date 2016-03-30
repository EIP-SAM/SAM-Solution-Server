module.exports = function initControllers(libs, conf, managers) {
  const controllers = {};

  require('logController.js')(libs, managers, controllers);

  return controllers;
};
