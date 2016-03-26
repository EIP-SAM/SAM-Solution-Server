module.exports = function initManagers(libs, conf, adapters) {
  const managers = {};

  managers.users = require('./users.js');
  managers.passport = require('./passport.js');

  return managers;
};
