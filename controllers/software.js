//
// Controller Software
//
var softwareManager = require('../managers/software');

//
//   Call to get users
//
module.exports.allUsers = function(req, res) {
  return softwareManager.allUsers(req, res);
}
