//
// Form create user actions
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
import { resetStatePasswordConfirmation } from './PasswordConfirmation/actions';
import { resetStateGroups } from './Groups/actions';
import {
  resetStateUsername,
  usernameErrorMsg,
} from './Username/actions';

import {
  resetStateEmail,
  emailErrorMsg,
} from './Email/actions';

import {
  resetStatePassword,
  passwordErrorMsg,
} from './Password/actions';

export function resetStateForm() {
  return function resetState(dispatch) {
    dispatch(resetStateUsername());
    dispatch(resetStateEmail());
    dispatch(resetStatePasswordConfirmation());
    dispatch(resetStatePassword());
    dispatch(resetStateGroups());
  };
}

export function createUserRequest(username, email, password, passwordConfirmation, selectedGroup) {
  const users = [{
    name: username,
    email,
    password,
    confirmation: passwordConfirmation,
    groups: selectedGroup,
  }];
  return function returnCreateUserRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/users/create')
      .type('json')
      .send({ users })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        if (res.body.errors) {
          switch (res.body.errors[0].error.field) {
            case 1:
              dispatch(usernameErrorMsg(res.body.errors[0].error.error));
              break;
            case 2:
              dispatch(emailErrorMsg(res.body.errors[0].error.error));
              break;
            case 3:
              dispatch(passwordErrorMsg(res.body.errors[0].error.error));
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
