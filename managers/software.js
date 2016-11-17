//
// Manager Software
//

const softwareAdapter = require('../adapters/software');
const usersAdapter = require('../adapters/users');
const usersManager = require('../managers/users');

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
          console.log(err);
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
  });
}

//
// Install a package
//
module.exports.installSoftwareByUser = function (user, package, socket) {
  softwareAdapter.launchAnInstall(user, package).then(function (listpackage) {
    socket.emit('server_install_software_by_user', listpackage);
  });
}

//
// Update a package
//
module.exports.installSoftwareByUser = function (user, package, socket) {
  softwareAdapter.launchAnUpdate(user, package).then(function (listpackage) {
    socket.emit('server_update_software_by_user', listpackage);
  });
}

//
// Remove package
//
module.exports.removeSoftwareByUser = function (user, package, socket) {
  softwareAdapter.launchARemove(user, package).then(function (listpackage) {
    socket.emit('server_remove_software_by_user', listpackage);
  });
}
