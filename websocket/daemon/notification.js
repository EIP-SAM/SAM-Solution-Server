const logger = require('../../libs/bunyan').setModuleName('Daemon');
const daemonCmdAdapter = require('../../adapters/daemonCommand');
const userAdapter = require('../../adapters/users');
const daemonCommandChecker = require('./daemonCommand');


//
// Send a notification to display to the daemon
// If user is not connected, the notification order may be persisted to db
//
module.exports.display = function display(username, title, description, cb) {
  let socketArray = require('../../libs/socket-io').socketArray.daemon;
  let socket = socketArray[username];

  if (typeof socket !== 'undefined') {
    logger.info('Send notification display command for', username)
    socket.emit('server_notification_module', {title: title, description: description});
    if (typeof cb !== 'undefined') {
      socket.on('daemon_notification_module', cb);
    }

    return 1;
  } else {
    logger.info(username + "'s daemon is not connected")
    userAdapter.findByName(username).then(function(user) {
      daemonCmdAdapter.create(user.id, daemonCommandChecker.NOTIFICATION_DISPLAY, { title, description});
    }).catch(function(err) {
      console.log(err);
      logger.info("Unable to persist notification for " + username);
    });
  }

  return 0;
}
