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
  GET_USERS,
  REMOVE_ALERT,
  REBOOT_ALERT,
  RESET_ALERT,
} from './constants';

export function resetAlert() {
  return {
    type: RESET_ALERT,
  };
}

export function removeAlert() {
  return {
    type: REMOVE_ALERT,
  };
}

export function rebootAlert() {
  return {
    type: REBOOT_ALERT,
  };
}

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function getUsersRequest() {
  return function returnGetUsersRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/users')
      .end((err, res) => {

        if (err && res.statusCode == 401) {
          browserHistory.push('/login');
        }

        dispatch(getUsers(res.body.users));
      });
  };
}
