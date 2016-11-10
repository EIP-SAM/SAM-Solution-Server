//
// Controller Software
//
var softwareManager = require('../managers/software');

module.exports.allUsersInfo = function(req, res) {
  return softwareManager.allUsersInfo(req, res);
}

module.exports.allSoftwaresByUser = function(req, res) {
  return softwareManager.allSoftwaresByUser(req, res);
}

module.exports.searchSoftwareByUser = function(req, res) {
  return softwareManager.searchSoftwareByUser(req, res);
}

module.exports.installSoftwareByUser = function(req, res) {
  return softwareManager.installSoftwareByUser(req, res);
}

module.exports.removeSoftwareByUser = function(req, res) {
  return softwareManager.removeSoftwareByUser(req, res);
}
