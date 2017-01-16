const logger = require('../../libs/bunyan').setModuleName('Daemon');
const daemonCmdAdapter = require('../../adapters/daemonCommand');
const userAdapter = require('../../adapters/users');
const daemonCommandChecker = require('./daemonCommand');
const socketIo = require('../../libs/socket-io');

module.exports.exec = function exec(username, branch, restoreId, cb) {
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
  userAdapter.findByName(username).then((user) => {
    logger.info(`Persist restore for ${username}`);
    daemonCmdAdapter.create(user.id, daemonCommandChecker.RESTORE_EXEC, { branch, restoreId });
  }).catch(() => {
    logger.info(`Unable to persist notification for ${username}`);
  });
  return 0;
};
