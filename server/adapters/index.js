module.exports = function initAdapters(libs, conf, models, workers) {
  const adapters = {};

  require('./log')(models, adapters);

  return adapters;
};
