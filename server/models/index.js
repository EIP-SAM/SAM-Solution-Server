module.exports = function initModels(libs, conf) {
  const models = {};

  models.Users = require('./users')(libs, conf, models);
  models.Groups = require('./groups')(libs, conf, models);
  models.Rights = require('./rights')(libs, conf, models);
  models.UsersGroupsRelations = require('./usersGroupsRelations')(libs, conf, models);

  libs.sequelize.sync();

  return models;
};
