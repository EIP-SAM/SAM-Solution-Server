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
  SET_SORTS,
  REQUEST_IS_LOADING,
} from '../constants/result';

function request(state = false, action) {
  switch (action.type) {
    case REQUEST_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

function sorts(state = 'none', action) {
  switch (action.type) {
    case SET_SORTS:
      return action.sorts;
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
  request,
  sorts,
  logs,
});
