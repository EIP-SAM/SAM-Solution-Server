//
// Manager Software
//

const softwareAdapter = require('../adapters/software');
const usersAdapter = require('../adapters/users');
const socket = require('socket.io');
const usersManager = require('../managers/users');

//
// Get all users with their OS and package name
//
module.exports.allUsersInfo = function (req, res) {
  const users = usersAdapter.findAll()
    .then(function (users) {
      users.forEach(function (user) {
      softwareAdapter.launchGetOperatingSystem(user.name)
      .then(function (listpackages) {
          var username = {"name":user.name};
          listpackages.username = user.name;
          console.log(listpackages);
        });
    });
    return users;
  });
  return users;
}

//
// Get all softwares infos of an user
//
module.exports.allSoftwaresByUser = function (req, res) {
  req.user.id = 1;
  usersAdapter.findById(req.user.id).then(function (user){
    softwareAdapter.launchListPackages(user.name)
      .then(function (listpackage) {
        var package = [];
        listpackage.result.forEach (function (package){
          softwareAdapter.launchAnUpdate(user.name, package.packageName).then(function (listupdate){
            listupdate.result.forEach (function (updates) {
              if (package.packageName == updates.packageName) {
                package.updated = updates.updated;
              }
            });
          });
        });
      });
  });
};

//
// Search a package
//
module.exports.searchSoftwareByUser = function (req, res) {
  usersAdapter.findById(req.user.id).then(function (user){
    softwareAdapter.launchAQuery(user.name, req.package.name).then(function (package) {
      console.log(package);
    });
  });
}

//
// Install a package
//
module.exports.installSoftwareByUser = function (req, res) {
  usersAdapter.findById(req.user.id).then(function (user){
    softwareAdapter.launchAnInstall(user.name, req.package.name).then(function (package) {
      console.log(package);
    });
  });
}

//
// Remove package
//
module.exports.removeSoftwareByUser = function (req, res) {
  usersAdapter.findById(req.user.id).then(function (user){
    softwareAdapter.launchARemove(user.name, req.package.name).then(function (package) {
      console.log(package);
    });
  });
}
