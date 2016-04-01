module.exports = function initManagers(libs, conf, adapters) {
  const managers = {};

  managers.users = require('./users.js');
  managers.groups = require('./groups.js');
  managers.rights = require('./rights.js');
  managers.passport = require('./passport.js');

  return managers;
};
