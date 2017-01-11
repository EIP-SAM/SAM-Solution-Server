const logger = require('../../libs/bunyan').setModuleName('Daemon');
const socketIo = require('../../libs/socket-io');

module.exports.exec = function exec(username, branch, cb) {
  const socketArray = socketIo.socketArray.daemon;
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
