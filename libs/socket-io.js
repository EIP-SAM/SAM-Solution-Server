let socketio = require('socket.io');
const logger = require('../libs/bunyan').setModuleName('socket.io');

let socketArray = {
  "webapp": [],
  "daemon": [],
};
module.exports.socketArray = socketArray;

module.exports.init = function init(server) {
    let io = socketio(server);
    io.on('connection', function (socket) {
        logger.info('New connection from socket-io');

        socket.emit('server_GetData');

        socket.on('daemon_GetData', function (info) {
          socketArray.daemon[info.username] = socket;
          logger.info('New client from daemon connected :', info.username)

          socket.on('disconnect', function() {
            logger.info('Client disconnected from daemon :', info.username)
            delete socketArray.daemon[info.username];
          });
        });

        return io;
    });

}

module.exports.isConnected = function isConnected(username, clientType) {
  let socket = socketArray[clientType][username];
  if (typeof socket !== 'undefined') {
    return true;
  }

  return false;
}
