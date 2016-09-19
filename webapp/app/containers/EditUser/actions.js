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
  EDIT_USER,
  GET_GROUPS,
  GET_CURRENT_USER,
} from './constants';

export function getUser(user) {
  return {
    type: GET_USER,
    user: user,
  }
}

export function getUserRequest(id, callback) {
  console.log('get : /api/logged-in/user?id=' + id + ' :');
  return function returnGetUserRequest(dispatch) {
    return request
      .get('/api/logged-in/user?id=' + id)
      .end((err, res) => {
          console.log('reponse a /api/logged-in/user?id=' + id + ' :');
          console.log(res.body);
          dispatch(getUser(res.body));
          if (res.body.isAdmin == true) {
            callback(res.body.groups);
          }
      });
  };
}

export function getCurrentUser(user) {
  return {
    type: GET_CURRENT_USER,
    currentUser : user,
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

export function editUserRequest(user) {
  console.log('requete envoyee a /api/logged-in/user/update :');
  console.log(user);
  return function returnEditUserRequest(dispatch) {
    return request
      .post('/api/logged-in/user/update')
      .type('json')
      .send(user)
      .end((err, res) => {
        console.log('reponse a /api/logged-in/user/update :');
        console.log(res.body);
        dispatch(editUser(res.body));
        if (res.body.name) {
          browserHistory.push('/edit-user/' + user.id);
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
      if (user[j].name == groups[i].name) {
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
