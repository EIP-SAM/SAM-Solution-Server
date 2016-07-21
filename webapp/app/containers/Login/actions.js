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
  console.log('requete envoyee a /api/public/user/login :');
  console.log('{ username: ' + username + ', password: ' + password + ' }');
  return function returnLoginRequest(dispatch) {
    return request
      .post('/api/public/user/login/')
      .type('form')
      .send({ username, password })
      .end((err, res) => {
        console.log('reponse a /api/public/user/login :');
        console.log(res.body);
        dispatch(login(res.body));
        if (res.body.name) {
          browserHistory.push('/edit-user/' + username);
        }
    });
  };
}
