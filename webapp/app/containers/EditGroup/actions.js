//
// EditGroup actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import request from 'utils/request';

import {
  EDIT_GROUP,
  GET_GROUP,
  GET_USERS,
} from './constants';

export function getGroup(group) {
  return {
    type: GET_GROUP,
    group: group,
  }
}

export function getGroupRequest(id, callback) {
  console.log('get : /api/logged-in/group?id=' + id + ' :');
  return function returnGetGroupRequest(dispatch) {
    return request
      .get('/api/logged-in/group?id=' + id)
      .end((err, res) => {
        console.log('reponse a /api/logged-in/group?id=' + id + ' :');
        console.log(res.body);
        dispatch(getGroup(res.body));
        callback(res.body.users);
    });
  };
}

export function editGroup(group) {
  return {
    type: EDIT_GROUP,
    group: group,
  };
}

export function editGroupRequest(group) {
  console.log('requete envoyee a /api/logged-in/group/update :');
  console.log(group);
  return function returnEditGroupRequest(dispatch) {
    return request
      .post('/api/logged-in/group/update')
      .type('json')
      .send(user)
      .end((err, res) => {
        console.log('reponse a /api/logged-in/group/update :');
        console.log(res.body);
        dispatch(editGroup(res.body));
        if (res.body.name) {
          browserHistory.push('/edit-group/' + group.name);
        }
    });
  };
}

export function getUsers(users, group) {
  var usersGroups = [];
  var i = 0;
  if (group) {
    while (i < users.length) {
      var j = 0;
      while (j < group.length) {
        if (group[j].id == users[i].id) {
          usersGroups.push(true);
          break;
        }
        ++j;
        if (j == group.length)
          usersGroups.push(false);
      }
      i++;
    }
  }

  return {
    type: GET_USERS,
    users: users,
    usersGroups: usersGroups,
  }
}

export function getUsersRequest(users) {
  console.log('get : /api/logged-in/admin/users :');
  return function returnGetUsersRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/users')
      .end((err, res) => {
        console.log('reponse a /api/logged-in/admin/users :');
        console.log(res.body);
        dispatch(getUsers(res.body.users, users));
    });
  };
}
