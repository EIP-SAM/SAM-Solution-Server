//
// Manager Software
//

const softwareAdapter = require('../adapters/software');
const usersAdapter = require('../adapters/users');
const logger = require('../libs/bunyan').setModuleName('Software');

//
// Get all users with their OS and package name
//
module.exports.allUsersInfo = (socket) => {
  usersAdapter.findAll()
    .then((users) => {
      users.forEach((user) => {
        softwareAdapter.launchGetOperatingSystem(user.name)
      .then((listpackages) => {
        listpackages.username = user.name;
        socket.emit('server_all_software', listpackages);
      }).catch((err) => {
        socket.emit('server_all_software', err);
        logger.setUser({ id: '', name: user }).error(`getOperationSystem failed for ${user}`);
      });
      });
    });
};

//
// Get all softwares infos of an user
//
module.exports.allSoftwaresByUser = (user, socket) => {
  softwareAdapter.launchListPackages(user)
    .then((listpackage) => {
      socket.emit('server_all_software_by_user', listpackage);
    }).catch((err) => {
      socket.emit('server_all_software_by_user', err);
      if (err === 'undefined') {
        socket.emit('server_all_software_by_user', {error: {}});
      } else {
        socket.emit('server_all_software_by_user', {error: {err}});
      }
      logger.setUser({ id: '', name: user }).error(`${user} failed to get all packages`);
    });
};

//
// Search a package
//
module.exports.searchSoftwareByUser = (user, packageName, socket) => {
  softwareAdapter.launchAQuery(user, packageName).then((listpackage) => {
    socket.emit('server_search_software_by_user', listpackage);
    logger.setUser({ id: '', name: user }).info(`${user} has searched ${packageName}`);
  }).catch((err) => {
    socket.emit('server_search_software_by_user', err);
    logger.setUser({ id: '', name: user }).error(`${user} failed to search ${packageName}`);
  });
};

//
// Install a package
//
module.exports.installSoftwareByUser = (user, packageName, socket) => {
  softwareAdapter.launchAnInstall(user, [packageName]).then((listpackage) => {
    socket.emit('server_install_software_by_user', listpackage);
    logger.setUser({ id: '', name: user }).info(`${user} has successfuly installed ${packageName}`);
  }).catch((err) => {
    socket.emit('server_install_software_by_user', err);
    logger.setUser({ id: '', name: user }).error(`${user} has failed to install ${packageName}`);
  });
};

//
// Update a package
//
module.exports.updateSoftwareByUser = (user, packageName, socket) => {
  softwareAdapter.launchAnUpdate(user, [packageName]).then((listpackage) => {
    socket.emit('server_update_software_by_user', listpackage);
    logger.setUser({ id: '', name: user }).info(`${user} has successfuly updated ${packageName}`);
  }).catch((err) => {
    socket.emit('server_update_software_by_user', err);
    logger.setUser({ id: '', name: user }).error(`${user} has failed to update ${packageName}`);
  });
};

//
// Remove package
//
module.exports.removeSoftwareByUser = (user, packageName, socket) => {
  softwareAdapter.launchARemove(user, [packageName]).then((listpackage) => {
    socket.emit('server_remove_software_by_user', listpackage);
    logger.setUser({ id: '', name: user }).info(`${user} has successfuly removed ${packageName}`);
  }).catch((err) => {
    socket.emit('server_remove_software_by_user', err);
    logger.setUser({ id: '', name: user }).error(`${user} has failed to remove ${packageName}`);
  });
};
