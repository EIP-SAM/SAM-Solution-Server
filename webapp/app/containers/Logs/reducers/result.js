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
  LOGS_GET_FILTERED_LOGS,
  LOGS_CLEAR_LOGS,
  LOGS_SET_SORTS,
  LOGS_REQUEST_IS_LOADING,
} from '../constants/result';

function request(state = false, action) {
  switch (action.type) {
    case LOGS_REQUEST_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

function sorts(state = 'none', action) {
  switch (action.type) {
    case LOGS_SET_SORTS:
      return action.sorts;
    default:
      return state;
  }
}

const initialState = {
  logs: { error: false, data: [] },
};

function logs(state = initialState, action) {
  switch (action.type) {
    case LOGS_GET_FILTERED_LOGS:
      return Object.assign({}, state, {
        logs: action.logs,
      });
    case LOGS_CLEAR_LOGS:
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
