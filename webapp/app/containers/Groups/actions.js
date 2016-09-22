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

import request from 'utils/request';
import { browserHistory } from 'react-router';

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
      .get('/api/logged-in/admin/groups')
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(getGroups(res.body));
    });
  };
}
