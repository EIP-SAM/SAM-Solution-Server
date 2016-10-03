const logger = require('../libs/bunyan').setModuleName('Daemon');

module.exports.exec = function exec(username, files, cb) {
  let socketArray = require('./index').socketArray;
  let socket = socketArray[username];

  if (typeof socket !== 'undefined') {
    logger.info('Send save exec command for', username);
    socket.emit('server_save_Exec', {files: files});
    if (typeof cb !== 'undefined') {
      socket.on('daemon_save_Exec', cb);
    }

    return 1;
  }

  return 0;
}
