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
} from './constants';



export function login(user) {
  return {
    type: LOGIN,
    user,
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
          dispatch(setUserInfo(true, res.body));
          browserHistory.push('/edit-user/' + res.body.id);
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
          dispatch(resetUserInfo());
          browserHistory.push('/login');
        }
      });
  };
}
