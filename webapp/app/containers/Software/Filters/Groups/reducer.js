//
// Groups filter software page reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SOFTWARE_USERS_GROUPS,
  SOFTWARE_CURRENT_GROUP,
} from './constants';

const initialState = {
  groups: [],
  currentGroup: 'All',
};

function SoftwareGroupsFilterReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARE_USERS_GROUPS:
      return Object.assign({}, state, {
        groups: action.groups,
      });
    case SOFTWARE_CURRENT_GROUP:
      return Object.assign({}, state, {
        currentGroup: action.currentGroup,
      });
    default:
      return state;
  }
}

export default SoftwareGroupsFilterReducer;
