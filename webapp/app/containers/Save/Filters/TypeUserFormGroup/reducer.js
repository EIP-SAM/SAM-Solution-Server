//
// Instant save modal save page  Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_USERS,
} from './constants';

const initialState = {
  listTypeUsers: [],
};

function SaveTypeUserFormGroupReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        listTypeUsers: action.listTypeUsers,
      });
    default:
      return state;
  }
}

export default SaveTypeUserFormGroupReducer;
