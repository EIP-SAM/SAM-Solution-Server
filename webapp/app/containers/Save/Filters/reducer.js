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
  GET_LIST_USERS,
  GET_TYPE_USERS,
  GET_GROUP_USERS,
} from './constants';

const initialState = {
  listUsers: [],
  listTypeUsers: [],
  listGroupsUsers: [],
};

function SaveFiltersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_USERS:
      return Object.assign({}, state, {
        listUsers: action.listUsers,
      });
    case GET_GROUP_USERS:
      return Object.assign({}, state, {
        listGroups: action.listGroups,
      });
    case GET_TYPE_USERS:
      return Object.assign({}, state, {
        listTypeUsers: action.listTypeUsers,
      });
    default:
      return state;
  }
}

export default SaveFiltersReducer;
