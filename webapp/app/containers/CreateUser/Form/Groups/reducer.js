//
// Groups filter save page reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  CREATE_USER_GROUPS,
  CREATE_USER_SELECTED_GROUPS,
  CREATE_USER_RESET_STATE_GROUPS,
} from './constants';

const initialState = {
  groups: [],
  selectedGroup: [],
};

function CreateUserFormGroupsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_RESET_STATE_GROUPS:
      return Object.assign({}, initialState, {});
    case CREATE_USER_GROUPS:
      return Object.assign({}, state, {
        groups: action.groups,
      });
    case CREATE_USER_SELECTED_GROUPS:
      return Object.assign({}, state, {
        selectedGroup: action.selectedGroup,
      });
    default:
      return state;
  }
}

export default CreateUserFormGroupsReducer;
