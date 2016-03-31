module.exports = function initControllers(libs, conf, managers) {
  const controllers = {};

  require('./logController')(libs, managers, controllers);

  return controllers;
};
