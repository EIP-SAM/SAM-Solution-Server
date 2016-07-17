//
// Logs Filter Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SET_FILTERS,
  RESET_FILTERS,
} from '../constants/filters';

function reducer(state = {}, action) {
  switch (action.type) {
    case SET_FILTERS:
      return Object.assign({}, state, {
        filters: action.filters,
      });
    case RESET_FILTERS:
      return Object.assign({}, state, {
        filters: action.filters,
      });
    default:
      return state;
  }
}

export default reducer;
