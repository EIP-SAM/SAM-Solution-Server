//
// EditUser actions
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
  SAVE_DATA,
  GET_USER,
  GET_CURRENT_USER,
  EDIT_USER,
} from './constants';

export function onChangeData(username, email, password, confirmation) {
  return {
    type: SAVE_DATA,
    username: username,
    email: email,
    password: password,
    confirmation: confirmation,
  };
}
export function getUser(user) {
  return {
    type: GET_USER,
    displayedUsername: user.name,
    displayedEmail: user.email,
  };
}

export function getUserRequest(username) {
  return function returnGetUserRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/users')
      .end((err, res) => {
        var i = 0;
        while (i < res.body.users.length && res.body.users[i].name != username) {
          ++i;
        }
        dispatch(getUser(res.body.users[i]));
      });
  };
}

export function getCurrentUser(user) {
  return {
    type: GET_CURRENT_USER,
    username: user.username,
    email: user.email,
    password: user.password,
    confirmation: user.confirmation,
  };
}

export function getCurrentUserRequest() {
  return function returngetCurrentUserRequest(dispatch) {
    return request
      .get('/api/logged-in/user/profile')
      .end((err, res) => {
        dispatch(getCurrentUser(res.body));
      });
  };
}

export function editUser(user) {
  return {
    type: EDIT_USER,
    user: user,
  };
}

export function editUserRequest(username, email, password, confirmation) {
  return function returnEditUserRequest(dispatch) {
    return request
      .post('/api/logged-in/user/profile/update')
      .type('form')
      .send({ username, email, password, confirmation })
      .end((err, res) => {
        dispatch(editUser(res.body));
      });
  };
}
