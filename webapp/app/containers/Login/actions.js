const request = require('superagent');

import {
  LOGIN,
} from './constants';

export function login(username, password) {
  return {
    type: LOGIN,
  };
}

export function loginRequest(username, password) {
  return function returnLoginRequest(dispatch) {
    return request
      .post('http://localhost:8080/api/public/user/login')
      .type('form')
      .send({ username, password })
      .end((err, res) => {
        dispatch(login(res.body));
      });
  };
}
