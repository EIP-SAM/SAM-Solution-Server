//
// Module to centralize the use of socket.io
//

import io from 'socket.io-client';
import manifest from '../manifest.json';

const socket = io(manifest.url_server_api);

export default {
  socket,
};
