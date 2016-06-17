//
// Logs Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_ALL_LOGS,
} from './constants';

function LogsReducer(state = {}, action) {
  switch (action.type) {
    case GET_ALL_LOGS:
      return Object.assign({}, state, {
        logs: action.logs,
      });
    default:
      return state;
  }
}

export default LogsReducer;
