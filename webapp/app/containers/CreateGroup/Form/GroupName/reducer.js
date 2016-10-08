//
// Username form create user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  CREATE_GROUP_GROUP_NAME_CHANGE,
  CREATE_GROUP_RESET_STATE_GROUP_NAME,
  CREATE_GROUP_GROUP_NAME_ERROR,
} from './constants';

const initialState = {
  groupName: '',
  groupNameError: '',
};

function CreateGroupFormGroupNameReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GROUP_RESET_STATE_GROUP_NAME:
      return Object.assign({}, initialState, {});
    case CREATE_GROUP_GROUP_NAME_CHANGE:
      return Object.assign({}, state, {
        groupName: action.groupName,
      });
    case CREATE_GROUP_GROUP_NAME_ERROR:
      return Object.assign({}, state, {
        groupNameError: action.groupNameError,
      });
    default:
      return state;
  }
}

export default CreateGroupFormGroupNameReducer;
