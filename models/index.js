module.exports = function initModels(libs, conf) {
  const models = {};

  require('./User')(libs, models);
  require('./saveSchedule')(libs, models);
  require('./save')(libs, models);
  require('./restore')(libs, models);
  require('./migration')(libs, models);

  return models;
};
