let socketio = require('socket.io');

let socketArray = [];
module.exports.socketArray = socketArray;

module.exports.init = function init(server) {
    let io = socketio(server);
    io.on('connection', function (socket) {
        console.log("Daemon connected");

        socket.emit('server_GetData');
        socket.on('daemon_GetData', function (info) {
          socketArray[info.username] = socket;

          //let saveExec = require('./save').exec;
          //saveExec(info.username, '/home/jeremy', function(msg) {console.log('return from save : ', msg)});

          socket.on('disconnect', function() {
            delete socketArray[info.username];
          });
        });

        return io;
    });

}
