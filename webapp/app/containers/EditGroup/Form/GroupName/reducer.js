//
// Username form edit user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  EDIT_GROUP_GROUP_NAME_CHANGE,
  EDIT_GROUP_RESET_STATE_GROUP_NAME,
  EDIT_GROUP_GROUP_NAME_ERROR,
} from './constants';

const initialState = {
  groupName: '',
  groupNameError: '',
};

function EditGroupFormGroupNameReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_GROUP_RESET_STATE_GROUP_NAME:
      return Object.assign({}, initialState, {});
    case EDIT_GROUP_GROUP_NAME_CHANGE:
      return Object.assign({}, state, {
        groupName: action.groupName,
      });
    case EDIT_GROUP_GROUP_NAME_ERROR:
      return Object.assign({}, state, {
        groupNameError: action.groupNameError,
      });
    default:
      return state;
  }
}

export default EditGroupFormGroupNameReducer;
