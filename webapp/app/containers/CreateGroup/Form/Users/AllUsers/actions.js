//
// All users form create group actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//
import request from 'utils/request';
import {
  CREATE_GROUP_GET_USERS,
  CREATE_GROUP_PRE_SELECTED_USERS,
  CREATE_GROUP_REMOVE_USERS,
  CREATE_GROUP_RESET_STATE_ALL_USERS,
} from './constants';

export function resetStateAllUsers() {
  return {
    type: CREATE_GROUP_RESET_STATE_ALL_USERS,
  };
}

export function getUsers(users) {
  return {
    type: CREATE_GROUP_GET_USERS,
    users,
  };
}

export function preSelectedUsersOnChange(preSelectedUsers) {
  return {
    type: CREATE_GROUP_PRE_SELECTED_USERS,
    preSelectedUsers,
  };
}

function removeUser(index) {
  return {
    type: CREATE_GROUP_REMOVE_USERS,
    index,
  };
}

export function removeUsers(users, preSelectedUsers) {
  return function returnRemoveUsers(dispatch) {
    for (let preSelectedUser of preSelectedUsers) {
      for (let user of users) {
        if (user.id === preSelectedUser.id) {
          dispatch(removeUser(users.indexOf(user)));
        }
      }
    }
  };
}
