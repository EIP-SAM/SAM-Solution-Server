//
// Group name edit group actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  EDIT_GROUP_GROUP_NAME_CHANGE,
  EDIT_GROUP_RESET_STATE_GROUP_NAME,
  EDIT_GROUP_GROUP_NAME_ERROR,
} from './constants';

export function resetStateGroupName() {
  return {
    type: EDIT_GROUP_RESET_STATE_GROUP_NAME,
  };
}

export function groupNameChange(groupName) {
  return {
    type: EDIT_GROUP_GROUP_NAME_CHANGE,
    groupName,
  };
}

export function groupNameErrorMsg(groupNameError) {
  return {
    type: EDIT_GROUP_GROUP_NAME_ERROR,
    groupNameError,
  };
}
