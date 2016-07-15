//
// ForgottenPassword actions
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
  FORGOTTEN_PASSWORD,
  SAVE_DATA,
} from './constants';

export function onChangeData(email) {
  return {
    type: SAVE_DATA,
    email: email,
  }
}

export function forgottenPassword(res) {
  return {
    type: FORGOTTEN_PASSWORD,
    res: res,
  };
}

export function forgottenPasswordRequest(email) {
  return function returnForgottenPasswordRequest(dispatch) {
    return request
      .post('http://localhost:8080/api/public/user/recover_password')
      .type('form')
      .send({ email })
      .end((err, res) => {
        console.log(res.body);
        dispatch(forgottenPassword(res.body));
        if (res.body.success) {
          dispatch(push('/login'));
        }
        else {
          console.log('Error: invalid or unknown email');
        }
    });
  };
}
