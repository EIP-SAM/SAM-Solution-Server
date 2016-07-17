//
// Groups actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

const request = require('../../agent');

import {
  GET_GROUPS,
} from './constants';

export function getGroups(groups) {
  return {
    type: GET_GROUPS,
    groups: groups,
  }
}

export function getGroupsRequest() {
  return function returnGetGroupsRequest(dispatch) {
    return request
      .get('http://localhost:8080/api/logged-in/admin/groups')
      .end((err, res) => {
        dispatch(getGroups(res.body));
    });
  };
}
