//
// Register actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import request from 'utils/request';

import { push } from 'react-router-redux';

import {
  REGISTER,
  SAVE_DATA,
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

export function register(user) {
  return {
    type: REGISTER,
    user: user,
  };
}

export function registerRequest(username, email, password, confirmation) {
  return function returnRegisterRequest(dispatch) {
    return request
      .post('/api/public/user/sign-up')
      .type('form')
      .send({ username, email, password, confirmation })
      .end((err, res) => {
        dispatch(register(res.body));
        if (res.body.success) {
          dispatch(push('/login'));
        }
      });
  };
}
