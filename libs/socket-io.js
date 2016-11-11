const socketio = require('socket.io');
const uid = require('uid');

const logger = require('../libs/bunyan').setModuleName('socket.io');

const initWebappSocket = require('../websocket/webapp/index');

const CLIENT_TYPE_DEAMON = "daemon";
const CLIENT_TYPE_WEBAPP = "webapp";

let socketArray = {
  "webapp": {},
  "daemon": {},
};

module.exports.socketArray = socketArray;

module.exports.CLIENT_TYPE_DEAMON = CLIENT_TYPE_DEAMON;
module.exports.CLIENT_TYPE_WEBAPP = CLIENT_TYPE_WEBAPP;

module.exports.init = function init(server) {
    let io = socketio(server);
    io.on('connection', function (socket) {
        logger.info('New connection from socket-io');

        socket.emit('server_GetUserData');

        socket.on('daemon_GetUserData', function (info) {
          socketArray[CLIENT_TYPE_DEAMON][info.username] = socket;
          logger.info('New client from daemon connected :', info.username)

          socket.on('disconnect', function() {
            logger.info('Client disconnected from daemon :', info.username)
            delete socketArray[CLIENT_TYPE_DEAMON][info.username];
          });
        });

        socket.on('webapp_GetUserData', function (info) {
          let id = uid();
          socketArray[CLIENT_TYPE_WEBAPP][id]= socket;
          logger.info('New client from webapp connected : #' + id)

          initWebappSocket(socket);

          socket.on('disconnect', function() {
            logger.info('Client disconnected from webapp : #' + id)
            delete socketArray[CLIENT_TYPE_WEBAPP][id];
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

module.exports.getNbrUserConnected = function getNbrUserConnected(clientType) {
  return Object.keys(socketArray[clientType]).length;
}
