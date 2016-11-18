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

import 'utils/socket-io';
import { browserHistory } from 'react-router';
import request from 'utils/request';

import {
  APP_SET_USER_INFO,
  APP_SET_APP_LOADING_STATE,
} from './constants';

export function setAppLoadingState(isLoading) {
  return {
    type: APP_SET_APP_LOADING_STATE,
    isLoading,
  };
}

export function setUserInfo(logged, user) {
  return {
    type: APP_SET_USER_INFO,
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
    type: APP_SET_USER_INFO,
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
    dispatch(setAppLoadingState(true));
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
