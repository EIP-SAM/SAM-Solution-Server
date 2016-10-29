//
// SoftwareUsersList Reducer
//

import {
  SOFTWARE_USER_LIST_RECEIVE_SOCKET_DATA,
} from './constants';

const initialState = {
};

function SoftwareUsersListReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARE_USER_LIST_RECEIVE_SOCKET_DATA:
      return Object.assign({}, state, {
        socketData: action.socketData,
      });
    default:
      return state;
  }
}

export default SoftwareUsersListReducer;
