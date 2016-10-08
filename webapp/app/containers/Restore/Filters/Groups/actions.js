//
// Groups filter restore actions
//

import { browserHistory } from 'react-router';
import request from 'utils/request';
import {
  RESTORE_USERS_GROUPS,
  RESTORE_CURRENT_GROUP,
} from './constants';

export function getCurrentGroup(currentGroup) {
  return {
    type: RESTORE_CURRENT_GROUP,
    currentGroup,
  };
}

export function getGroups(groups) {
  return {
    type: RESTORE_USERS_GROUPS,
    groups,
  };
}

export function getGroupsRequest() {
  return function returnGetGroups(dispatch) {
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
