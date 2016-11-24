const daemonCmdAdapter = require('../../adapters/daemonCommand');
const userAdapter = require('../../adapters/users');

const notificationDaemon = require('../../websocket/daemon/notification');

module.exports.NOTIFICATION_DISPLAY = 'notification.display';

//
// Check if any persisted command are save for the user
//
module.exports.check = function check(username) {
  userAdapter.findByName(username).then(function(user) {
    daemonCmdAdapter.getCommandById(user.id).then(function(commands) {
      for (let i = 0; i < commands.length; ++i) {
        commandFunction[commands[i].commandName](commands[i]);
        daemonCmdAdapter.deleteById(commands[i].id);
      }
    }).catch(function() {
      logger.info("Unable to retrieve persist notification for " + username);
    });
  }).catch(function(err) {
    logger.info("Unable to retrieve " + username + "for persisted commands");
  });
}

let commandFunction = [];
commandFunction[module.exports.NOTIFICATION_DISPLAY] = function(command) {
  userAdapter.findById(command.userId).then(function(user) {
    let data = JSON.parse(command.content);
    notificationDaemon.display(user.name, data.title, data.description);
  }).catch(function(err) {
    logger.info("Unable to retrieve user " + command.userId + "for persisted commands");
  });
}
