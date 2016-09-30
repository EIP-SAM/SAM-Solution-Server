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
import { resetStatePassword } from './Password/actions';
import { resetStatePasswordConfirmation } from './PasswordConfirmation/actions';
import { getUserGroups } from './Groups/actions';
import {
  usernameChange,
  resetStateUsername,
 } from './Username/actions';

import {
  emailChange,
  resetStateEmail,
} from './Email/actions';

import {
  GET_USER,
  EDIT_USER,
  GET_CURRENT_USER,
  EDIT_USER_ID,
  EDIT_USER_RESET_USER_ID,
} from './constants';

export function getUser(user) {
  return {
    type: GET_USER,
    user,
  };
}

export function resetStateForm() {
  return function resetState(dispatch) {
    dispatch(resetStateUserId());
    dispatch(resetStateUsername());
    dispatch(resetStateEmail());
    dispatch(resetStatePassword());
    dispatch(resetStatePasswordConfirmation());
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

        dispatch(getUser(res.body));
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

        browserHistory.goBack();
        dispatch(resetStateForm());
      });
  };
}


export function getCurrentUser(user) {
  return {
    type: GET_CURRENT_USER,
    currentUser: user,
  };
}

export function getCurrentUserRequest() {
  return function returnGetCurrentUserRequest(dispatch) {
    return request
      .get('/api/logged-in/user/profile')
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(getCurrentUser(res.body));
      });
  };
}

export function editUser(user) {
  return {
    type: EDIT_USER,
    user,
  };
}

export function editUserAdminRequest(users) {
  return function returnEditUserRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/users/update')
      .type('json')
      .send({ users })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(editUser(res.body));
        if (res.body.users) {
          browserHistory.push(`/edit-user/${users[0].name}`);
        }
      });
  };
}
