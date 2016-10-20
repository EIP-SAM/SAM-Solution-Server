//
// All users form edit group actions
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
  EDIT_GROUP_GET_USERS,
  EDIT_GROUP_PRE_SELECTED_USERS,
  EDIT_GROUP_REMOVE_USERS,
} from './constants';

export function getUsers(users) {
  return {
    type: EDIT_GROUP_GET_USERS,
    users,
  };
}

export function preSelectedUsersOnChange(preSelectedUsers) {
  return {
    type: EDIT_GROUP_PRE_SELECTED_USERS,
    preSelectedUsers,
  };
}

function removeUser(index) {
  return {
    type: EDIT_GROUP_REMOVE_USERS,
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

export function getUsersRequest() {
  return function returnGetUsersRequest(dispatch) {
    return request
    .get('/api/logged-in/admin/users')
    .end((err, res) => {
      if (res.body.users) {
        const users = res.body.users.map((user) => {
          return { id: user.id, name: user.name };
        });
        dispatch(getUsers(users));
      }
    });
  };
}
