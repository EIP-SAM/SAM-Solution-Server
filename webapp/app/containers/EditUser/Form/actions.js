//
// EditUser actions
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
import { resetStatePasswordConfirmation } from './PasswordConfirmation/actions';
import {
  resetStatePassword,
  passwordErrorMsg,
} from './Password/actions';

import {
  getUserGroups,
  resetStateGroups,
} from './Groups/actions';

import {
  usernameChange,
  resetStateUsername,
  usernameErrorMsg,
 } from './Username/actions';

import {
  emailChange,
  resetStateEmail,
  emailErrorMsg,
} from './Email/actions';

import {
  EDIT_USER_ID,
  EDIT_USER_RESET_USER_ID,
} from './constants';

export function resetStateForm() {
  return function resetState(dispatch) {
    dispatch(resetStateUserId());
    dispatch(resetStateUsername());
    dispatch(resetStateEmail());
    dispatch(resetStatePassword());
    dispatch(resetStatePasswordConfirmation());
    dispatch(resetStateGroups());
  };
}

export function resetStateUserId() {
  return {
    type: EDIT_USER_RESET_USER_ID,
  };
}

export function getUserId(userId) {
  return {
    type: EDIT_USER_ID,
    userId,
  };
}

export function getUserRequest(id) {
  return function returnGetUserRequest(dispatch) {
    return request
      .get(`/api/logged-in/user?id=${id}`)
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        dispatch(getUserId(res.body.id));
        dispatch(usernameChange(res.body.name));
        dispatch(emailChange(res.body.email));
        let groupsName = [];
        if (res.body.groups.length > 0) {
          groupsName = res.body.groups.map((group) => group.name);
        }
        dispatch(getUserGroups(groupsName));
      });
  };
}

export function editUserRequest(userId, username, email, password, passwordConfirmation, userGroups) {
  const user = {
    id: userId,
    name: username,
    email,
    password,
    confirmation: passwordConfirmation,
    groups: userGroups,
  };

  return function returnEditUserRequest(dispatch) {
    return request
      .post('/api/logged-in/user/update')
      .type('json')
      .send(user)
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        console.log(res.body);
        if (res.body.error) {
          console.log(res.body.error);
          switch (res.body.error.field) {
            case 1:
              dispatch(usernameErrorMsg(res.body.error.error));
              break;
            case 2:
              dispatch(emailErrorMsg(res.body.error.error));
              break;
            case 3:
              dispatch(passwordErrorMsg(res.body.error.error));
              break;
            default:
              break;
          }
        } else {
          browserHistory.goBack();
          dispatch(resetStateForm());
        }
      });
  };
}
