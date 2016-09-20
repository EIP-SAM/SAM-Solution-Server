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
import { getUsersRequest } from 'containers/Users/actions';
import {
  SHOW_INSTANT_DELETE_MODAL,
  USER_TO_DELETE,
} from './constants';

export function showInstantDeleteModal() {
  return {
    type: SHOW_INSTANT_DELETE_MODAL,
    showModal: true,
  };
}

export function hideInstantDeleteModal() {
  return {
    type: SHOW_INSTANT_DELETE_MODAL,
    showModal: false,
  };
}

export function userToDelete(username, userId) {
  return {
    type: USER_TO_DELETE,
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
    .end(() => {
      dispatch(getUsersRequest());
    });
  };
}
