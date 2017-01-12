const logger = require('../../libs/bunyan').setModuleName('Daemon');
const socketIo = require('../../libs/socket-io');

module.exports.exec = function exec(username, cb) {
  const socketArray = socketIo.socketArray.daemon;
  const socket = socketArray[username];

  if (typeof socket !== 'undefined') {
    logger.info('Send getMacAdress command for', username);
    socket.emit('server_getMacAdress_exec', { username });
    if (typeof cb !== 'undefined') {
      socket.on('daemon_getMacAdress_exec', cb);
    }

    return 1;
  }
  logger.info(`${username}'s daemon is not connected`);

  return 0;
};
