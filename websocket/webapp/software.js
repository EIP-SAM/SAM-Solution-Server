const softwareManager = require('../../managers/software');

module.exports = function (socket) {
  socket.on('webapp_package', function(data) {
    /*softwareManager.updateAll(data.user.username).then(function(packageUpdatedList) {
      socket.emit('server_software_update_all', {err: '', packageUpdatedList});
    }).catch(function(err){
      socket.emit('server_software_update_all', {err: err});
    });*/
  });
};
