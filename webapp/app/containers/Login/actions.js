//
// Login actions
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
  LOGIN,
  SAVE_DATA,
  SET_USER_INFO,
} from './constants';

export function onChangeData(username, password) {
  return {
    type: SAVE_DATA,
    username,
    password,
  };
}

export function login(user) {
  return {
    type: LOGIN,
    user,
  };
}

export function setUserInfo(logged, username, email) {
  return {
    type: SET_USER_INFO,
    userInfo: {
      logged,
      username,
      email,
    },
  };
}

export function loginRequest(username, password) {
  return function returnLoginRequest(dispatch) {
    return request
      .post('/api/public/user/login/')
      .type('form')
      .send({ username, password })
      .end((err, res) => {
        if (!err && res.body.name) {
          dispatch(login(res.body));
          dispatch(setUserInfo(true, res.body.name, res.body.email));
          browserHistory.push('/edit-user/' + username);
        }
      });
  };
}

export function getUserInfo() {
  return function startAction(dispatch) {
    return request
      .get('/api/logged-in/user/profile')
      .end((err, res) => {
        if (!err) {
          dispatch(setUserInfo(true, res.body.name, res.body.email));
        } else {
          dispatch(setUserInfo(false));
        }
      });
  };
}

export function logoutRequest() {
  return function startAction(dispatch) {
    return request
      .post('/api/logged-in/user/logout')
      .end((err) => {
        if (err) {
          console.log(err);
        } else {
          dispatch(setUserInfo(false));
          browserHistory.push('/login');
        }
      });
  };
}
