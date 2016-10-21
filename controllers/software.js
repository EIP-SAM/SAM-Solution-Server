//
// Controller Software
//
var softwareManager = require('../managers/software');

//
//   Call to get users
//
module.exports.users = function(req, res) {
  return softwareManager.allUsers(req, res);
}
