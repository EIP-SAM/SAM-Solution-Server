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
  GET_SAVES,
} from './constants';

function SaveReducer(state = {}, action) {
  switch (action.type) {
    case GET_SAVES:
      return Object.assign({}, state, {
        saves: action.saves,
      });
    default:
      return state;
  }
}

export default SaveReducer;
