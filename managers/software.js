//
// Manager Software
//

const softwareAdapter = require('../adapters/software');
const usersAdapter = require('../adapters/users');
const socketIo = require('../libs/socket-io');

//
// Get all users with their OS and package name
//

  module.exports.allUsersInfo = function (req, res) {
    const users = usersAdapter.findAll().then(function (users) {
      for (var user of users){
        softwareAdapter.launchGetOperatingSystem(user.name)
        .then(function (result) {
            socket.on('webapp_GetOs', function(result){
              console.log('webapp_GetOs');
              socket.emit('server_GetOs', result);
            });
            fulfill(result);
        })
      }
      return users;
    });
    return users;
  };
