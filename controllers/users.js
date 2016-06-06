const usersManager = require('../managers/users');
const groupsManager = require('../managers/groups');

//
// Users
//
module.exports.retrieveUserProfile = function (req, res) {
  return usersManager.retrieveUserProfile(req, res);
};

module.exports.retrieveAllUsers = function (req, res) {
  return usersManager.retrieveAllUsers(req, res);
};

module.exports.createUser = function (param) {
  return usersManager.createUser(param);
};

module.exports.createUsers = function (param) {
  return usersManager.createUsers(param);
};

module.exports.updateUserProfile = function (param) {
  return usersManager.updateUserProfile(param);
};

module.exports.updateUsers = function (param) {
  return usersManager.updateUsers(param);
};

module.exports.recoverUserPassword = function (param) {
  return usersManager.recoverUserPassword(param);
};

module.exports.deleteUsers = function (param) {
  return usersManager.deleteUsers(param);
};

//
// Groups
//
module.exports.retrieveAllGroups = function (req, res) {
  return groupsManager.retrieveAllGroups(req, res);
};

module.exports.updateGroups = function (param) {
  return groupsManager.updateGroups(param);
};

module.exports.createGroups = function (param) {
  return groupsManager.createGroups(param);
};

module.exports.deleteGroups = function (param) {
  return groupsManager.deleteGroups(param);
};

module.exports.addUsersToGroup = function (param) {
  return groupsManager.addUsersToGroup(param);
};
