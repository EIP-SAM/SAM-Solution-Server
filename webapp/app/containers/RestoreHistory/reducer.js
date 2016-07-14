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
  GET_HISTORY_RESTORES_BY_USER,
} from './constants';

function RestoreHistoryReducer(state = {}, action) {
  switch (action.type) {
    case GET_HISTORY_RESTORES_BY_USER:
      return Object.assign({}, state, {
        restores: action.restores,
      });
    default:
      return state;
  }
}

export default RestoreHistoryReducer;
