//
// Save Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';

import {
  GET_RESTORES,
} from './constants';

export function getRestores(restores) {
  return {
    type: GET_RESTORES,
    restores,
  };
}

export function getVisibilityFilter(typeUser) {
  return function returnGetvisibilityFilter(dispatch) {
    return request
    .get('/api/logged-in/admin/restore')
    .end((err, res) => {
      const listUser = [];
      if (typeUser !== 'All') {
        res.body.map(function (restore) {
          if (typeUser === 'Admins' && restore.isAdmin === true) {
            listUser.push(restore);
          }
          else if (typeUser === 'Users' && restore.isAdmin === false) {
            listUser.push(restore);
          }
        });
        dispatch(getRestores(listUser));
      }
      else {
        dispatch(getRestores(res.body));
      }
    });
  };
}

export function getRestoresRequest() {
  return function returnGetRestoresRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/restore')
      .end((err, res) => {
        dispatch(getRestores(res.body));
      });
  };
}
