const softwareManager = require('../../managers/software');

module.exports = function (socket) {

  socket.on('webapp_all_users', function(data) {
    softwareManager.allUsersInfo(socket);
  });

  socket.on('webapp_all_software_by_user', function(data) {
    softwareManager.allSoftwaresByUser(data.username, socket);
  });

  socket.on('webapp_install_software_by_user', function(data) {
    softwareManager.installSoftwareByUser(data.username, data.package, socket);
  });

  socket.on('webapp_update_software_by_user', function(data) {
    softwareManager.updateSoftwareByUser(data.username, data.package, socket);
  });

  socket.on('webapp_search_software_by_user', function(data) {
    softwareManager.searchSoftwareByUser(data.username, data.package, socket);
  });

  socket.on('webapp_remove_software_by_user', function(data) {
    softwareManager.removeSoftwareByUser(data.username, data.package, socket);
  });

};
