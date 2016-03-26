module.exports = function initControllers(libs, conf, managers, adapters) {
  require('./users')(libs, conf, managers, adapters);
};
