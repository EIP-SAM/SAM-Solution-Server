//
// Groups filter restore page reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  RESTORE_USERS_GROUPS,
  RESTORE_CURRENT_GROUP,
} from './constants';

const initialState = {
  groups: [],
  currentGroup: 'All',
};

function RestoreGroupsFilterReducer(state = initialState, action) {
  switch (action.type) {
    case RESTORE_USERS_GROUPS:
      return Object.assign({}, state, {
        groups: action.groups,
      });
    case RESTORE_CURRENT_GROUP:
      return Object.assign({}, state, {
        currentGroup: action.currentGroup,
      });
    default:
      return state;
  }
}

export default RestoreGroupsFilterReducer;
