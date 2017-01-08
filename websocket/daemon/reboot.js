const logger = require('../../libs/bunyan').setModuleName('Daemon');

module.exports.exec = function exec(username, cb) {
  const socketArray = require('../../libs/socket-io').socketArray.daemon;
  const socket = socketArray[username];

  if (typeof socket !== 'undefined') {
    logger.info('Send reboot exec command for', username);
    socket.emit('server_reboot_Exec');
    if (typeof cb !== 'undefined') {
      socket.on('daemon_reboot_Exec', cb);
    }

    return 1;
  }
  logger.info(`${username}'s daemon is not connected`);
  return 0;
};
