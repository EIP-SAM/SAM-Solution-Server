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
  GET_HISTORY_SAVES_BY_USER,
} from './constants';

function SaveHistoryReducer(state = {}, action) {
  switch (action.type) {
    case GET_HISTORY_SAVES_BY_USER:
      return Object.assign({}, state, {
        saves: action.saves,
      });
    default:
      return state;
  }
}

export default SaveHistoryReducer;
