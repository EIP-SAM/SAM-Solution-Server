const logger = require('../../libs/bunyan').setModuleName('Daemon');
const socketIo = require('../../libs/socket-io');

module.exports.exec = function exec(username, files, cb) {
  const socketArray = socketIo.socketArray.daemon;
  const socket = socketArray[username];

  if (typeof socket !== 'undefined') {
    logger.info('Send save exec command for', username);
    socket.emit('server_save_Exec', { files });
    if (typeof cb !== 'undefined') {
      socket.on('daemon_save_Exec', cb);
    }

    return 1;
  }
  logger.info(`${username}'s daemon is not connected`);
  return 0;
};
