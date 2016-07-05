//
// Save Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_RESTORES,
} from './constants';

function RestoreReducer(state = {}, action) {
  switch (action.type) {
    case GET_RESTORES:
      return Object.assign({}, state, {
        restores: action.restores,
      });
    default:
      return state;
  }
}

export default RestoreReducer;
