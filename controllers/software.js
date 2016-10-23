//
// Controller Software
//
var softwareManager = require('../managers/software');

module.exports.launchAnInstall = function(req, res) {
  return softwareManager.launchAnInstall();
}

module.exports.launchAnUpdate = function(req, res) {
  return softwareManager.launchAnUpdate(req, res);
}

module.exports.launchARemove = function(req, res) {
  return softwareManager.launchARemove(req, res);
}

module.exports.launchAQuery = function(req, res) {
  return softwareManager.launchAQuery(req, res);
}

module.exports.launchListPackages = function(req, res) {
  return softwareManager.launchListPackages(req, res);
}

module.exports.launchGetOperatingSystem = function(req, res) {
  return softwareManager.launchGetOperatingSystem(req, res);
}
