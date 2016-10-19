//
// Selected users form create group actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import request from 'utils/request';
import { getUsers } from 'containers/CreateGroup/Form/Users/AllUsers/actions';
import {
  CREATE_GROUP_ADD_USERS_IN_GROUP,
  CREATE_GROUP_UNSELECTED_USERS,
} from './constants';

export function addUsersToGroup(selectedUsers) {
  return {
    type: CREATE_GROUP_ADD_USERS_IN_GROUP,
    selectedUsers,
  };
}

export function unselectedUsersOnChange(unselectedUsers) {
  return {
    type: CREATE_GROUP_UNSELECTED_USERS,
    unselectedUsers,
  };
}

export function removeUsersFromGroup(selectedUsers, unselectedUsers) {
  return function returnRemoveUsers(dispatch) {
    for (let unselectedUser of unselectedUsers) {
      for (let selectedUser of selectedUsers) {
        if (selectedUser === unselectedUser) {
          selectedUsers.splice(selectedUsers.indexOf(selectedUser), 1);
        }
      }
    }
    dispatch(getUsers(selectedUsers));
  };
}
