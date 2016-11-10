//
// Module to centralize the use of socket.io
//

import io from 'socket.io-client';
import manifest from '../manifest.json';

const socket = io(manifest.url_server_api);

socket.on('server_GetUserData', function(){
    socket.emit('webapp_GetUserData');
  });

export default {
  socket,
};
