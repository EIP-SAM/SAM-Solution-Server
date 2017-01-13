const logger = require('../../libs/bunyan').setModuleName('Daemon');
const daemonCmdAdapter = require('../../adapters/daemonCommand');
const userAdapter = require('../../adapters/users');
const daemonCommandChecker = require('./daemonCommand');
const socketIo = require('../../libs/socket-io');

//
// Send a notification to display to the daemon
// If user is not connected, the notification order may be persisted to db
//
module.exports.display = function display(username, title, description, persistence, cb) {
  const socketArray = socketIo.socketArray.daemon;
  const socket = socketArray[username];

  if (typeof socket !== 'undefined') {
    logger.info('Send notification display command for', username);
    socket.emit('server_notification_module', { title, description });
    if (typeof cb !== 'undefined') {
      socket.on('daemon_notification_module', cb);
    }

    return 1;
  }
  logger.info(`${username}'s daemon is not connected`);
  if (persistence && persistence === 'true') {
    userAdapter.findByName(username).then((user) => {
      logger.info(`Notification for ${username} persisted`);
      daemonCmdAdapter.create(user.id, daemonCommandChecker.NOTIFICATION_DISPLAY, { title, description });
    }).catch(() => {
      logger.error(`Unable to persist notification for ${username}`);
    });
  }

  return 0;
};
