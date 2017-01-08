module.exports = function initModels(libs) {
  const models = {};

  require('./users')(libs, models);
  require('./saveScheduled')(libs, models);
  require('./save')(libs, models);
  require('./restore')(libs, models);
  require('./migration')(libs, models);
  require('./image')(libs, models);

  return models;
};
