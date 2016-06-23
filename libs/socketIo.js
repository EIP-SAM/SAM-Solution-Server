var socketio = require('socket.io');

module.exports = function init(server) {
    var io = socketio(server);
    io.on('connection', function (socket) {
        console.log("socket connected");
        socket.on('newEvent', function (data) {
            console.log(data);
        });
    });
    return io;
}
