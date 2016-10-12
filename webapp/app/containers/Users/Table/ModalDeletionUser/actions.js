//
// User deletion modal Users actions
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
  getUsersRequest,
  removeAlert,
} from 'containers/Users/actions';

import {
  USERS_SHOW_INSTANT_DELETE_MODAL,
  USERS_USER_TO_DELETE,
} from './constants';

export function showInstantDeleteModal() {
  return {
    type: USERS_SHOW_INSTANT_DELETE_MODAL,
    showModal: true,
  };
}

export function hideInstantDeleteModal() {
  return {
    type: USERS_SHOW_INSTANT_DELETE_MODAL,
    showModal: false,
  };
}

export function userToDelete(username, userId) {
  return {
    type: USERS_USER_TO_DELETE,
    username,
    userId,
  };
}

export function deleteUser(userId) {
  const users = [
    userId,
  ];
  return function returnDeleteUser(dispatch) {
    return request
    .post('/api/logged-in/admin/users/delete')
    .type('json')
    .send({ users })
    .end((err, res) => {
      if (err && res.statusCode === 401) {
        browserHistory.push('/login');
      }

      dispatch(removeAlert());
      dispatch(getUsersRequest());
    });
  };
}
