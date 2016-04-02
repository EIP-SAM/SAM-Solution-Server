module.exports = function initAdapters(libs, conf, models, workers) {
  const adapters = {};

  require('./statistic')(models, adapters);

  return adapters;
};
