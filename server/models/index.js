module.exports = function initModels(libs, conf) {
  const models = {};

  require('./log').initLogModel(libs, models);

  return models;
};
