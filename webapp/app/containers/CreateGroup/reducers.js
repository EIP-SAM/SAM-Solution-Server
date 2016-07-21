//
// CreateGroup reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  CREATE_GROUP,
} from './constants';

function createGroupReducer(state = null, action) {
  switch (action.type) {
    case CREATE_GROUP:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}

export default createGroupReducer;
