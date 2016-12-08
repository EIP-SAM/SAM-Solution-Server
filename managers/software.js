//
// Manager Software
//

const softwareAdapter = require('../adapters/software');
const usersAdapter = require('../adapters/users');
const usersManager = require('../managers/users');
const logger = require('../libs/bunyan').setModuleName('Software');

//
// Get all users with their OS and package name
//
module.exports.allUsersInfo = function (socket) {
  usersAdapter.findAll()
    .then(function (users) {
      users.forEach(function (user) {
      softwareAdapter.launchGetOperatingSystem(user.name)
      .then(function (listpackages) {
          var username = {"name":user.name};
          listpackages.username = user.name;
          socket.emit('server_all_software', listpackages);
        }).catch(function (err){
          socket.emit('server_all_software', err);
          logger.setUser({ id: '', name: user }).error(`getOperationSystem failed for ${user}`);
        });
    });
  });
}

//
// Get all softwares infos of an user
//
module.exports.allSoftwaresByUser = function (user, socket) {
  softwareAdapter.launchListPackages(user)
    .then(function (listpackage) {
      socket.emit('server_all_software_by_user', listpackage);
    }).catch(function (err){
      socket.emit('server_all_software_by_user', err);
      logger.setUser({ id: '', name: user }).error(`${user} failed to get all packages`);
    });
};

//
// Search a package
//
module.exports.searchSoftwareByUser = function (user, packageName, socket) {
  softwareAdapter.launchAQuery(user, packageName).then(function (listpackage) {
    socket.emit('server_search_software_by_user', listpackage);
    logger.setUser({ id: '', name: user }).info(`${user} has searched ${packageName}`);
  }).catch(function (err){
    socket.emit('server_search_software_by_user', err);
    logger.setUser({ id: '', name: user }).error(`${user} failed to search ${packageName}`);
  });
}

//
// Install a package
//
module.exports.installSoftwareByUser = function (user, packageName, socket) {
  softwareAdapter.launchAnInstall(user, [packageName]).then(function (listpackage) {
    socket.emit('server_install_software_by_user', listpackage);
    logger.setUser({ id: '', name: user }).info(`${user} has successfuly installed ${packageName}`);
  }).catch(function (err){
    socket.emit('server_install_software_by_user', err);
    logger.setUser({ id: '', name: user }).error(`${user} has failed to install ${packageName}`);
  });
}

//
// Update a package
//
module.exports.updateSoftwareByUser = function (user, packageName, socket) {
  softwareAdapter.launchAnUpdate(user, [packageName]).then(function (listpackage) {
    socket.emit('server_update_software_by_user', listpackage);
    logger.setUser({ id: '', name: user }).info(`${user} has successfuly updated ${packageName}`);
  }).catch(function (err){
    socket.emit('server_update_software_by_user', err);
    logger.setUser({ id: '', name: user }).error(`${user} has failed to update ${packageName}`);
  });
}

//
// Remove package
//
module.exports.removeSoftwareByUser = function (user, packageName, socket) {
  softwareAdapter.launchARemove(user, [packageName]).then(function (listpackage) {
    socket.emit('server_remove_software_by_user', listpackage);
    logger.setUser({ id: '', name: user }).info(`${user} has successfuly removed ${packageName}`);
  }).catch(function (err){
    socket.emit('server_remove_software_by_user', err);
    logger.setUser({ id: '', name: user }).error(`${user} has failed to remove ${packageName}`);
  });
}
