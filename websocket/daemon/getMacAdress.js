const logger = require('../../libs/bunyan').setModuleName('Daemon');

module.exports.exec = function exec(username, cb) {
  let socketArray = require('../../libs/socket-io').socketArray.daemon;
  let socket = socketArray[username];

  if (typeof socket !== 'undefined') {
    logger.info('Send getMacAdress command for', username)
    socket.emit('server_getMacAdress_exec', {username});
    if (typeof cb !== 'undefined') {
      socket.on('daemon_getMacAdress_exec', cb);
    }

    return 1;
  } else {
    logger.info(username + "'s daemon is not connected")
  }

  return 0;
}
