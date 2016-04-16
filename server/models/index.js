module.exports = function initModels(libs, conf) {
  const models = {};

  require('./log')(libs, models);

  return models;
};
