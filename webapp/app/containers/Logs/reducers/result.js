//
// Logs Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import {
  GET_FILTERED_LOGS,
  CLEAR_LOGS,
  RESET_SORTS,
} from '../constants/result';

function sorts(state = {}, action) {
  switch (action.type) {
    case RESET_SORTS:
      return Object.assign({}, state, {
        sorts: action.sorts,
      });
    default:
      return state;
  }
}

function logs(state = {}, action) {
  switch (action.type) {
    case GET_FILTERED_LOGS:
      return Object.assign({}, state, {
        logs: action.logs,
      });
    case CLEAR_LOGS:
      return Object.assign({}, state, {
        logs: action.logs,
      });
    default:
      return state;
  }
}

export default combineReducers({
  sorts,
  logs,
});
