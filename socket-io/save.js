module.exports.exec = function exec(username, path, cb) {
  let socketArray = require('./index').socketArray;
  let socket = socketArray[username];
  console.log(socketArray);

  if (typeof socket !== 'undefined') {
    socket.emit('server_save_Exec', {path: path});
    if (typeof cb !== 'undefined') {
      socket.on('daemon_save_Exec', function(msg) {
        cb(msg);
      })
    }

    return 1;
  }

  return 0;
}
