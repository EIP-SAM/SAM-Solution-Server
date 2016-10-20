//
// Selected users form edit group actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import request from 'utils/request';
import { getUsers } from 'containers/EditGroup/Form/Users/AllUsers/actions';
import {
  EDIT_GROUP_ADD_USERS_IN_GROUP,
  EDIT_GROUP_UNSELECTED_USERS,
  EDIT_GROUP_REMOVE_SELECTED_USERS,
} from './constants';

export function addUsersToGroup(selectedUsers) {
  return {
    type: EDIT_GROUP_ADD_USERS_IN_GROUP,
    selectedUsers,
  };
}

export function unselectedUsersOnChange(unselectedUsers) {
  return {
    type: EDIT_GROUP_UNSELECTED_USERS,
    unselectedUsers,
  };
}


function removeSelectedUserFromGroup(index) {
  return {
    type: EDIT_GROUP_REMOVE_SELECTED_USERS,
    index,
  };
}

export function removeUsersFromGroup(selectedUsers, unselectedUsers) {
  return function returnRemoveUsers(dispatch) {
    for (let unselectedUser of unselectedUsers) {
      for (let selectedUser of selectedUsers) {
        if (selectedUser.id === unselectedUser.id) {
          dispatch(removeSelectedUserFromGroup(selectedUsers.indexOf(selectedUser)));
        }
      }
    }
  };
}
