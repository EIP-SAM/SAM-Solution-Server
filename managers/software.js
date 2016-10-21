//
// Manager Software
//

var softwareAdapter = require('../adapters/software');

//
// Get all users
//
module.exports.allUsers = function (req, res) {
  return softwareAdapter.allUsers().then(function(results){
    return results;
  });
}
