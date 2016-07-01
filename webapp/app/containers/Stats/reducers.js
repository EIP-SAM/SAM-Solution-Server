//
// Stats Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_STATS,
} from './constants';

function StatsReducer(state = {}, action) {
  switch (action.type) {
    case GET_STATS:
      return Object.assign({}, state, {
        stats: action.stats,
      });
    default:
      return state;
  }
}

export default StatsReducer;
