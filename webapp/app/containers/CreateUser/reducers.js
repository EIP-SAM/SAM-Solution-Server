//
// CreateUser reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  CREATE_USER,
  SAVE_DATA,
} from './constants';

function createUserReducer(state = null, action) {
  switch (action.type) {
    case CREATE_USER:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}

export default createUserReducer;
