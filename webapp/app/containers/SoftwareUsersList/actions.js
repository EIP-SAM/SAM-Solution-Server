//
// SoftwareUsersList Actions
//

// import { createStore, applyMiddleware } from 'redux';
// import createSocketIoMiddleware from 'redux-socket.io';
import socket from 'utils/socket.js';

import {
  SOFTWARE_USER_LIST_RECEIVE_SOCKET_DATA,
} from './constants';

export function receiveSocket(socketData) {
  return {
    type: SOFTWARE_RECEIVE_SOCKET_DATA,
    socketData,
  };
}

export function startSocketIo() {
  return function returnSocketData(dispatch) {
    socket.on('test', (data) => {
      dispatch(receiveSocket(data));
    });
  };
}
