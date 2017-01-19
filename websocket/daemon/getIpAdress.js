const logger = require('../../libs/bunyan').setModuleName('Daemon');
const socketIo = require('../../libs/socket-io');

/**
 * Retrieve IP adress for a specific daemon
 */
module.exports.exec = function exec(username, cb) {
  return new Promise((fullfill, reject) => {
    const socketArray = socketIo.socketArray.daemon;
    const socket = socketArray[username];

    if (!socket) {
      return reject(`User ${username} is not connected`);
    }

    let ip = socket.handshake.address;
    ip = ip.substring(ip.lastIndexOf(':') + 1);

    logger.info(`IP requested for ${username} : ${ip}`);

    if (typeof cb !== 'undefined') {
      cb({ ip });
    }

    return fullfill(ip);
  });
};
