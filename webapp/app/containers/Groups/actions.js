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
  GROUPS_GET_GROUPS,
  GROUPS_REMOVE_ALERT,
  GROUPS_RESET_ALERT,
} from './constants';

export function resetAlert() {
  return {
    type: GROUPS_RESET_ALERT,
  };
}

export function removeAlert() {
  return {
    type: GROUPS_REMOVE_ALERT,
  };
}

export function getGroups(groups) {
  return {
    type: GROUPS_GET_GROUPS,
    groups,
  };
}

export function getGroupsRequest() {
  return function returnGetGroupsRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/groups')
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        dispatch(getGroups(res.body.groups));
      });
  };
}
