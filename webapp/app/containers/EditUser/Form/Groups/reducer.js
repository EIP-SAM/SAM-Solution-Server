//
// Groups form edit user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  EDIT_USER_GET_ALL_GROUPS,
  EDIT_USER_USER_GROUPS,
} from './constants';

const initialState = {
  allGroups: [],
  userGroups: [],
};

function EditUserFormGroupsReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_USER_GET_ALL_GROUPS:
      return Object.assign({}, state, {
        allGroups: action.allGroups,
      });
    case EDIT_USER_USER_GROUPS:
      return Object.assign({}, state, {
        userGroups: action.userGroups,
      });
    default:
      return state;
  }
}

export default EditUserFormGroupsReducer;
