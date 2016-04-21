module.exports = function initAdapters(libs, conf, models, workers) {
  const adapters = {};

  require('./restore')(models, adapters);
  require('./save')(models, adapters);
  require('./saveSchedule')(models, adapters);
  require('./git')(workers, adapters);

  return adapters;
};
