const logger = require('../../libs/bunyan').setModuleName('Daemon');
const daemonCmdAdapter = require('../../adapters/daemonCommand');
const userAdapter = require('../../adapters/users');
const daemonCommandChecker = require('./daemonCommand');
const socketIo = require('../../libs/socket-io');

module.exports.exec = function exec(username, files, saveScheduledId, saveId, cb) {
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
  userAdapter.findByName(username).then((user) => {
    logger.info(`Persist save for ${username}`);
    daemonCmdAdapter.create(user.id, daemonCommandChecker.SAVE_EXEC, { files, saveScheduledId, saveId });
  }).catch(() => {
    logger.info(`Unable to persist notification for ${username}`);
  });

  return 0;
};
