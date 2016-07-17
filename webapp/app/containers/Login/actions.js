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

const request = require('../../agent');
// import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';

import {
  LOGIN,
  SAVE_DATA,
} from './constants';

export function onChangeData(username, password) {
  return {
    type: SAVE_DATA,
    username: username,
    password: password,
  }
}

export function login(user) {
  return {
    type: LOGIN,
    user: user,
  };
}

export function loginRequest(username, password) {
  return function returnLoginRequest(dispatch) {
    return request
      .post('http://localhost:8080/api/public/user/login/')
      .type('form')
      .send({ username, password })
      .end((err, res) => {
        dispatch(login(res.body));
        if (res.body.name) {
          // dispatch(push('/edit-user'));
          browserHistory.push('/edit-user/' + username);
        }
    });
  };
}