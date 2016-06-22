const usersManager = require('../managers/users');
const groupsManager = require('../managers/groups');

//
// Users/Admin security gate
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

module.exports.createUser = function () {
  return usersManager.createUser();
};

module.exports.recoverUserPassword = function () {
  return usersManager.recoverUserPassword();
};

module.exports.retrieveUserProfile = function () {
  return usersManager.retrieveUserProfile();
};

module.exports.updateUserProfile = function () {
  return usersManager.updateUserProfile();
};

//
// Users/Groups administration
//

module.exports.retrieveAllUsers = function () {
  return usersManager.retrieveAllUsers();
};

module.exports.retrieveAllGroups = function () {
  return groupsManager.retrieveAllGroups();
};

module.exports.createUsers = function (param) {
  return usersManager.createUsers(param);
};

module.exports.updateUsers = function (param) {
  return usersManager.updateUsers(param);
};

module.exports.deleteUsers = function (param) {
  return usersManager.deleteUsers(param);
};

module.exports.createGroups = function (param) {
  return groupsManager.createGroups(param);
};

module.exports.updateGroups = function (param) {
  return groupsManager.updateGroups(param);
};

module.exports.deleteGroups = function (param) {
  return groupsManager.deleteGroups(param);
};

module.exports.addUsersToGroup = function (param) {
  return groupsManager.addUsersToGroup(param);
};
