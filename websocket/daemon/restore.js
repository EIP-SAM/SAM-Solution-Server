const logger = require('../../libs/bunyan').setModuleName('Daemon');

module.exports.exec = function exec(username, branch, cb) {
  const socketArray = require('../../libs/socket-io').socketArray.daemon;
  const socket = socketArray[username];

  if (typeof socket !== 'undefined') {
    logger.info('Send restore exec command for', username, 'on branch ', branch);
    socket.emit('server_restore_Exec', { branch });
    if (typeof cb !== 'undefined') {
      socket.on('daemon_restore_Exec', cb);
    }

    return 1;
  }
  logger.info(`${username}'s daemon is not connected`);
  return 0;
};
