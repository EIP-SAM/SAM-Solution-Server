//
// Logs Filter Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import {
  LOGS_SET_FILTERS,
  LOGS_RESET_FILTERS,
  LOGS_COLLAPSE_PANEL,
  LOGS_INC_KEY_RERENDER,
} from '../constants/filters';

function keyRerender(state = 0, action) {
  switch (action.type) {
    case LOGS_INC_KEY_RERENDER:
      return state + 1;
    default:
      return state;
  }
}

function panel(state = {}, action) {
  switch (action.type) {
    case LOGS_COLLAPSE_PANEL:
      return Object.assign({}, state, {
        info: action.info,
      });
    default:
      return state;
  }
}

function fields(state = {}, action) {
  switch (action.type) {
    case LOGS_SET_FILTERS:
      return Object.assign({}, state, {
        filters: action.filters,
      });
    case LOGS_RESET_FILTERS:
      return Object.assign({}, state, {
        filters: action.filters,
      });
    default:
      return state;
  }
}


export default combineReducers({
  keyRerender,
  panel,
  fields,
});
