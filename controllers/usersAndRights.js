const usersManager = require('../managers/users');
const groupsManager = require('../managers/groups');

//
// Users/Admin security gate
//

module.exports.ensureLoggedOut = (req, res, next) => usersManager.ensureLoggedOut(req, res, next);

module.exports.ensureLoggedIn = (req, res, next) => usersManager.ensureLoggedIn(req, res, next);

module.exports.ensureAdminLoggedIn = (req, res, next) => usersManager.ensureAdminLoggedIn(req, res, next);

//
// Users
//

module.exports.login = passport => usersManager.login(passport);

module.exports.logout = () => usersManager.logout();

module.exports.createUser = () => usersManager.createUser();

module.exports.recoverUserPassword = () => usersManager.recoverUserPassword();

module.exports.retrieveUserProfile = () => usersManager.retrieveUserProfile();

module.exports.updateUserProfile = () => usersManager.updateUserProfile();

//
// Users administration
//

module.exports.retrieveAllUsers = () => usersManager.retrieveAllUsers();

module.exports.retrieveUser = () => usersManager.retrieveUser();

module.exports.createUsers = () => usersManager.createUsers();

module.exports.updateUsers = () => usersManager.updateUsers();

module.exports.deleteUsers = () => usersManager.deleteUsers();

module.exports.updateUser = () => usersManager.updateUser();

module.exports.deleteUser = () => usersManager.deleteUser();

module.exports.getNbrUserConnectedDeamon = () => usersManager.getNbrUserConnectedDeamon();

//
// Groups administration
//

module.exports.retrieveAllGroups = () => groupsManager.retrieveAllGroups();

module.exports.retrieveGroup = () => groupsManager.retrieveGroup();

module.exports.createGroups = () => groupsManager.createGroups();

module.exports.updateGroups = () => groupsManager.updateGroups();

module.exports.deleteGroups = () => groupsManager.deleteGroups();

module.exports.updateGroup = () => groupsManager.updateGroup();

module.exports.deleteGroup = () => groupsManager.deleteGroup();

module.exports.addUsersToGroup = () => groupsManager.addUsersToGroup();
