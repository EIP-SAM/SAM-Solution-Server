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

const initialState = {
  groups: [],
};

function groupsReducer(state = initialState, action) {
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
