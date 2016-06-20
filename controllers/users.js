const usersManager = require('../managers/users');
const groupsManager = require('../managers/groups');

//
// Users and admin security gate
//

module.exports.ensureLoggedOut = function (req, res, next) {
  return usersManager.ensureLoggedOut(req, res, next);
};

module.exports.ensureLoggedIn = function (req, res, next) {
  return usersManager.ensureLoggedIn(req, res, next);
};

module.exports.ensureAdminLoggedIn = function (req, res, next) {
  return usersManager.ensureAdminLoggedIn(req, res, next);
};

//
// Users
//

module.exports.login = function (passport) {
  return usersManager.login(passport);
};

module.exports.logout = function () {
  return usersManager.logout();
};

module.exports.retrieveUserProfile = function () {
  return usersManager.retrieveUserProfile();
};

module.exports.retrieveAllUsers = function (req, res) {
  return usersManager.retrieveAllUsers(req, res);
};

module.exports.createUser = function () {
  return usersManager.createUser();
};

module.exports.createUsers = function (param) {
  return usersManager.createUsers(param);
};

module.exports.updateUserProfile = function () {
  return usersManager.updateUserProfile();
};

module.exports.updateUsers = function (param) {
  return usersManager.updateUsers(param);
};

module.exports.recoverUserPassword = function () {
  return usersManager.recoverUserPassword();
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
