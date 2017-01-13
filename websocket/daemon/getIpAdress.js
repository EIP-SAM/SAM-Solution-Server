const logger = require('../../libs/bunyan').setModuleName('Daemon');
const socketIo = require('../../libs/socket-io');

/**
 * Retrieve IP adress for a specific daemon
 */
module.exports.exec = function exec(username, cb) {
  const socketArray = socketIo.socketArray.daemon;
  const socket = socketArray[username];

  let ip = socket.handshake.address;
  ip = ip.substring(ip.lastIndexOf(':') + 1);

  logger.info(`IP requested for ${username} : ${ip}`);

  if (typeof cb !== 'undefined') {
    cb({ ip });
  }

  return ip;
};
