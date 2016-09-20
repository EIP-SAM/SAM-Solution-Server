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
  GET_USERS,
} from './constants';

const initialState = {
  listGroups: [],
  listGroupsUsers: [],
};

function SaveGroupsFormGroupReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GROUPS:
      return Object.assign({}, state, {
        listGroups: action.listGroups,
      });
    case GET_USERS:
      return Object.assign({}, state, {
        listGroupsUsers: action.listGroupsUsers,
      });
    default:
      return state;
  }
}

export default SaveGroupsFormGroupReducer;
