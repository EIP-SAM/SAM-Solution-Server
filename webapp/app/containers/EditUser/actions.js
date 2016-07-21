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
import {
  GET_USER,
  GET_CURRENT_USER,
  EDIT_USER,
  GET_GROUPS,
} from './constants';

export function getUser(user) {
  return {
    type: GET_USER,
    user: user,
  }
}

export function getUserRequest(username, callback) {
  console.log('get : /api/logged-in/admin/users :');
  return function returnGetUserRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/users')
      .end((err, res) => {
        console.log('reponse a /api/logged-in/admin/users :');
        console.log(res.body);
        var i = 0;
        while (i < res.body.users.length && res.body.users[i].name != username) {
          ++i;
        }
        console.log('user affiche sur la page : ');
        if (!res.body.users[i]) {
          var user = {error: 'Error : User ' + username + ' not found'};
          console.log(user);
          dispatch(getUser(user));
        } else {
          console.log(res.body.users[i]);
          dispatch(getUser(res.body.users[i]));
          callback(res.body.users[i].groups);
        }
      });
  };
}

export function getCurrentUser(user) {
  return {
    type: GET_CURRENT_USER,
    currentUsername: user.username,
    currentEmail: user.email,
    isAdmin: user.isAdmin,
  }
}

export function getCurrentUserRequest() {
  console.log('get : /api/logged-in/user/profile :');
  return function returnGetCurrentUserRequest(dispatch) {
    return request
      .get('/api/logged-in/user/profile')
      .end((err, res) => {
        console.log('reponse a /api/logged-in/user/profile :');
        console.log(res.body);
        dispatch(getCurrentUser(res.body));
      });
  };
}

export function editUser(user) {
  return {
    type: EDIT_USER,
    user: user,
  };
}

export function editUserAdminRequest(users) {
  console.log('requete envoyee a /api/logged-in/admin/users/update :');
  console.log(users);
  return function returnEditUserRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/users/update')
      .type('json')
      .send({ users })
      .end((err, res) => {
        console.log('reponse a /api/logged-in/admin/users/update :');
        console.log(res.body);
        dispatch(editUser(res.body));
        if (res.body.users) {
          browserHistory.push('/edit-user/' + users[0].name);
        }
      });
  };
}

export function editUserRequest(user) {
  console.log('requete envoyee a /api/logged-in/user/profile/update :');
  console.log(user);
  return function returnEditUserRequest(dispatch) {
    return request
      .post('/api/logged-in/user/profile/update')
      .type('json')
      .send({ user })
      .end((err, res) => {
        console.log('reponse a /api/logged-in/user/profile/update :');
        console.log(res.body);
        dispatch(editUser(res.body));
        if (res.body.name) {
          browserHistory.push('/edit-user/' + users[0].name);
        }
      });
  };
}

export function getGroups(groups, user) {
  var usersGroups = [];
  var i = 0;
  while (i < groups.length) {
    var j = 0;
    while (j < user.length) {
      if (user[j].id == groups[i].id) {
        usersGroups.push(true);
        break;
      }
      ++j;
      if (j == user.length)
        usersGroups.push(false);
    }
    i++;
  }

  return {
    type: GET_GROUPS,
    groups: groups,
    usersGroups: usersGroups,
  }
}

export function getGroupsRequest(groups) {
  console.log('get : /api/logged-in/admin/groups :');
  return function returnGetGroupsRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/groups')
      .end((err, res) => {
        console.log('reponse a /api/logged-in/admin/groups :');
        console.log(res.body);
        dispatch(getGroups(res.body.groups, groups));
    });
  };
}
