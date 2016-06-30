module.exports.exec = function exec(username, commit, cb) {
  let socketArray = require('./index').socketArray;
  let socket = socketArray[username];
  console.log(socketArray);

  if (typeof socket !== 'undefined') {
    socket.emit('server_restore_Exec', {commit: commit});
    if (typeof cb !== 'undefined') {
      socket.on('daemon_restore_Exec', function(msg) {
        cb(msg);
      })
    }

    return 1;
  }

  return 0;
}
