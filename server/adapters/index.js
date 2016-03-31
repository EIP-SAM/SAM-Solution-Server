module.exports = function initAdapters(libs, conf, models, workers) {
  const adapters = {};

  require('./restore')(models, adapters);
  require('./git')(workers, adapters);

  return adapters;
};
