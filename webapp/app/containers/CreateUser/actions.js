//
// CreateUser actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

const request = require('superagent');
import { push } from 'react-router-redux';

import {
  CREATE_USER,
  SAVE_DATA,
} from './constants';

export function onChangeData(username, email, password, confirmation) {
  return {
    type: SAVE_DATA,
    username: username,
    email: email,
    password: password,
    confirmation: confirmation,
  }
}

export function createUser(user) {
  return {
    type: CREATE_USER,
    user: user,
  };
}

export function createUserRequest(username, email, password, confirmation) {
  return function returnCreateUserRequest(dispatch) {
    return request
      .post('http://localhost:8080/api/public/user/sign-up')
      .type('form')
      .send({ username, email, password, confirmation })
      .end((err, res) => {
        dispatch(createUser(res.body));
        if (res.body.success) {
          dispatch(push('/login'));
        }
    });
  };
}
