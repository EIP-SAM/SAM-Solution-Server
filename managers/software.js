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
      listpackage.result.forEach (function (package){
        softwareAdapter.launchAnUpdate(user, package.packageName).then(function (listupdate){
          listupdate.result.forEach (function (updates) {
            if (package.packageName == updates.packageName) {
              package.updated = updates.updated;
              socket.emit('server_all_software_by_user', package);
            }
          });
        }).catch(function (err){
          socket.emit('server_all_software_by_user', err);
          logger.setUser({ id: '', name: user }).error(`${user} failed to update ${package}`);
        });
      });
  });
};

//
// Search a package
//
module.exports.searchSoftwareByUser = function (user, package, socket) {
  softwareAdapter.launchAQuery(user, package).then(function (listpackage) {
    socket.emit('server_search_software_by_user', listpackage);
    logger.setUser({ id: '', name: user }).info(`${user} has searched ${package}`);
  }).catch(function (err){
    socket.emit('server_search_software_by_user', err);
    logger.setUser({ id: '', name: user }).error(`${user} failed to search ${package}`);
  });
}

//
// Install a package
//
module.exports.installSoftwareByUser = function (user, package, socket) {
  softwareAdapter.launchAnInstall(user, package).then(function (listpackage) {
    socket.emit('server_install_software_by_user', listpackage);
    logger.setUser({ id: '', name: user }).info(`${user} has successfuly installed ${package}`);
  }).catch(function (err){
    socket.emit('server_install_software_by_user', err);
    logger.setUser({ id: '', name: user }).error(`${user} has failed to install ${package}`);
  });
}

//
// Update a package
//
module.exports.updateSoftwareByUser = function (user, package, socket) {
  softwareAdapter.launchAnUpdate(user, package).then(function (listpackage) {
    socket.emit('server_update_software_by_user', listpackage);
    logger.setUser({ id: '', name: user }).info(`${user} has successfuly updated ${package}`);
  }).catch(function (err){
    socket.emit('server_update_software_by_user', err);
    logger.setUser({ id: '', name: user }).error(`${user} has failed to update ${package}`);
  });
}

//
// Remove package
//
module.exports.removeSoftwareByUser = function (user, package, socket) {
  softwareAdapter.launchARemove(user, package).then(function (listpackage) {
    socket.emit('server_remove_software_by_user', listpackage);
    logger.setUser({ id: '', name: user }).info(`${user} has successfuly removed ${package}`);
  }).catch(function (err){
    socket.emit('server_remove_software_by_user', err);
    logger.setUser({ id: '', name: user }).error(`${user} has failed to remove ${package}`);
  });
}
