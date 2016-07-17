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

module.exports.createUsers = function () {
  return usersManager.createUsers();
};

module.exports.updateUsers = function () {
  return usersManager.updateUsers();
};

module.exports.deleteUsers = function () {
  return usersManager.deleteUsers();
};

module.exports.createGroups = function () {
  return groupsManager.createGroups();
};

module.exports.updateGroups = function () {
  return groupsManager.updateGroups();
};

module.exports.deleteGroups = function () {
  return groupsManager.deleteGroups();
};

module.exports.addUsersToGroup = function () {
  return groupsManager.addUsersToGroup();
};
