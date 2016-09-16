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

import {
  GET_USERS,
  SHOW_INSTANT_DELETE_MODAL,
} from './constants';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users: users,
  };
}

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

export function getUsersRequest() {
  return function returnGetUsersRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/users')
      .end((err, res) => {
        dispatch(getUsers(res.body));
      });
  };
}

export function deleteUser(user) {
  const users = [
    user.id,
  ];
  return function returnDeleteUser() {
    return request
    .post('/api/logged-in/admin/users/delete')
    .type('json')
    .send({ users })
    .end((err, res) => {
      console.log('user deleted');
    });
  };
}

export function rebootUser(username) {
  return function rebootUserRequest() {
    return request
      .get('/api/logged-in/admin/reboot')
      .query({ username })
      .end((err, res) => {
        console.log(res);
      });
  };
}
