module.exports = function initControllers(libs, conf, managers) {
  const controllers = {};

  require('./log')(libs, managers, controllers);

  return controllers;
};
