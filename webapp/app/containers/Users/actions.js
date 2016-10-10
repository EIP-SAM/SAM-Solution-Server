//
// Users actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import request from 'utils/request';
import { browserHistory } from 'react-router';
import {
  USERS_GET_USERS,
  USERS_USERNAME,
  USERS_REMOVE_ALERT,
  USERS_REBOOT_ALERT,
  USERS_RESET_ALERT,
} from './constants';

export function resetAlert() {
  return {
    type: USERS_RESET_ALERT,
  };
}

export function removeAlert() {
  return {
    type: USERS_REMOVE_ALERT,
  };
}

export function rebootAlert() {
  return {
    type: USERS_REBOOT_ALERT,
  };
}

export function getUsers(users) {
  return {
    type: USERS_GET_USERS,
    users,
  };
}

export function getUsername(username) {
  return {
    type: USERS_USERNAME,
    username,
  };
}

export function getUsersRequest() {
  return function returnGetUsersRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/users')
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(getUsers(res.body.users));
      });
  };
}
