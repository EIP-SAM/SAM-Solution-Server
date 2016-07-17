//
// Groups reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_GROUPS,
} from './constants';


function groupsReducer(state = null, action) {
  switch (action.type) {
    case GET_GROUPS:
      return Object.assign({}, state, {
        groups: action.groups,
      });
    default:
      return state;
  }
}

export default groupsReducer;
