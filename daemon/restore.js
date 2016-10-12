const logger = require('../libs/bunyan').setModuleName('Daemon');

module.exports.exec = function exec(username, branch, cb) {
  let socketArray = require('./index').socketArray;
  let socket = socketArray[username];

  if (typeof socket !== 'undefined') {
    logger.info('Send restore exec command for', username, 'on branch ', branch)
    socket.emit('server_restore_Exec', {branch: branch});
    if (typeof cb !== 'undefined') {
      socket.on('daemon_restore_Exec', cb);
    }

    return 1;
  }

  return 0;
}
