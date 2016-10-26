//
// Controller Software
//
var softwareManager = require('../managers/software');

module.exports.allUsersInfo = function(req, res) {
  return softwareManager.allUsersInfo();
}
