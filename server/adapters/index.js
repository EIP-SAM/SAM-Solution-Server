module.exports = function initAdapters(libs, conf, models, workers) {
  const adapters = {};

  require('./logAdapter')(models, adapters);

  return adapters;
};
