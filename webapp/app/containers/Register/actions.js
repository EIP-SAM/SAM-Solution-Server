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

const request = require('superagent');
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
  }
}

export function register(user) {
  return {
    type: REGISTER,
    user: user,
  };
}

export function registerRequest(username, email, password, confirmation) {
  console.log('username: ' + username + ', email: ' + email + ', password: ' + password + ', confirmation: ' + confirmation);
  return function returnRegisterRequest(dispatch) {
    return request
      .post('http://localhost:8080/api/public/user/sign-up')
      .type('form')
      .send({ username, email, password, confirmation })
      .end((err, res) => {
        console.log(res.body);
        dispatch(register(res.body));
        if (res.body.success) {
          dispatch(push('/login'));
        }
        else {
          console.log('Error: register failed');
        }
    });
  };
}
