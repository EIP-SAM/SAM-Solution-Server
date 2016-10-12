let socketio = require('socket.io');
const logger = require('../libs/bunyan').setModuleName('Daemon');

let socketArray = [];
module.exports.socketArray = socketArray;

module.exports.init = function init(server) {
    let io = socketio(server);
    io.on('connection', function (socket) {
        logger.info('Daemon connected from client');

        socket.emit('server_GetData');
        socket.on('daemon_GetData', function (info) {
          socketArray[info.username] = socket;
          logger.info('New client connected :', info.username)

          socket.on('disconnect', function() {
            logger.info('Client disconnected :', info.username)
            delete socketArray[info.username];
          });
        });

        return io;
    });

}
