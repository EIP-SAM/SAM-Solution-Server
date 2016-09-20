//
// Instant save modal save page  Reducer
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
  listGroups: [],
};

function SaveGroupsFormGroupReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GROUPS:
      return Object.assign({}, state, {
        listGroups: action.listGroups,
      });
    default:
      return state;
  }
}

export default SaveGroupsFormGroupReducer;
