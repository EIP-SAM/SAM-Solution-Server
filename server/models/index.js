module.exports = function initModels(libs, conf) {
  const models = {};

  models.Users = require('./users')(libs, conf);
  models.Groups = require('./groups')(libs, conf);
  models.Rights = require('./rights')(libs, conf);

  return models;
};
