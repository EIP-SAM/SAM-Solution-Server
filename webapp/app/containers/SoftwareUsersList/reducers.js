//
// SoftwareUsersList Reducer
//

import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import {
} from './constants';

const initialState = {
};

const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

function SoftwareUsersListReducer(state = initialState, action) {
  switch (action.type) {
    // case STATS_RESET_STATE_GRAPH_DATA:
    //   return Object.assign({}, initialState, {});
    case 'message':
      return Object.assign({}, { message: action.data });
    default:
      return state;
  }
}

const store = applyMiddleware(socketIoMiddleware)(createStore)(SoftwareUsersListReducer);
store.subscribe(() => {
  console.log('new client state', store.getState());
});
store.dispatch({ type: 'server/hello', data: 'Hello!' });

export default SoftwareUsersListReducer;
