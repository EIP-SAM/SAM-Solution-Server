//
// App actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import { browserHistory } from 'react-router';
import request from 'utils/request';

import {
  SET_USER_INFO,
} from './constants';

export function setUserInfo(logged, user) {
  return {
    type: SET_USER_INFO,
    userInfo: {
      logged,
      userId: user.id,
      username: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
  };
}

export function resetUserInfo() {
  return {
    type: SET_USER_INFO,
    userInfo: {
      logged: false,
      userId: '',
      username: '',
      email: '',
      isAdmin: '',
    },
  };
}

export function getUserInfo() {
  return function startAction(dispatch) {
    return request
      .get('/api/logged-in/user/profile')
      .end((err, res) => {
        if (!err) {
          dispatch(setUserInfo(true, res.body));
        } else {
          dispatch(resetUserInfo());
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
