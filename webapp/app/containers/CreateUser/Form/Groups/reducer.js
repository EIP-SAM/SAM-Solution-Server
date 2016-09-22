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
  GROUPS,
  SELECTED_GROUPS,
  RESET_STATE_GROUPS,
} from './constants';

const initialState = {
  groups: [],
  selectedGroup: [],
};

function CreateUserFormGroupsReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_GROUPS:
      return Object.assign({}, initialState, {});
    case GROUPS:
      return Object.assign({}, state, {
        groups: action.groups,
      });
    case SELECTED_GROUPS:
      return Object.assign({}, state, {
        selectedGroup: action.selectedGroup,
      });
    default:
      return state;
  }
}

export default CreateUserFormGroupsReducer;
