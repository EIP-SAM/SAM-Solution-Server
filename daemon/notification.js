const logger = require('../libs/bunyan').setModuleName('Daemon');

module.exports.display = function display(username, title, description, cb) {
  let socketArray = require('../libs/socket-io').socketArray.daemon;
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
  }

  return 0;
}
