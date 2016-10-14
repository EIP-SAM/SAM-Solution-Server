let socketio = require('socket.io');
const logger = require('../libs/bunyan').setModuleName('socket.io');

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

        socket.emit('server_GetData');

        socket.on('daemon_GetData', function (info) {
          socketArray[CLIENT_TYPE_DEAMON][info.username] = socket;
          logger.info('New client from daemon connected :', info.username)

          socket.on('disconnect', function() {
            logger.info('Client disconnected from daemon :', info.username)
            delete socketArray[CLIENT_TYPE_DEAMON][info.username];
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
  console.log("clientType", clientType);
  console.log("socketArray[clientType]", socketArray[clientType]);
  console.log("socketArray[clientType]|[0]", socketArray[clientType]["jeremy"]);
  console.log("socketArray[clientType].length", Object.keys(socketArray[clientType]).length);
  return Object.keys(socketArray[clientType]).length;
}
