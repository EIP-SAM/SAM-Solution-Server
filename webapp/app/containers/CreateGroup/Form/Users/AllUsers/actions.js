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
} from './constants';

export function getUsers(users) {
  console.log(users);
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

export function removeUsers(users, preSelectedUsers) {
  return function returnRemoveUsers(dispatch) {
    for (let preSelectedUser of preSelectedUsers) {
      for (let user of users) {
        if (user === preSelectedUser) {
          users.splice(users.indexOf(user), 1);
        }
      }
    }
    console.log(users);
    dispatch(getUsers(users));
  };
}

export function getUsersRequest() {
  return function returnGetUsersRequest(dispatch) {
    return request
    .get('/api/logged-in/admin/users')
    .end((err, res) => {
      if (res.body.users) {
        const users = res.body.users.map((user) => {
          return user.name;
        });
        dispatch(getUsers(users));
      }
    });
  };
}
