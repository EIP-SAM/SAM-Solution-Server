//
// Groups filter software actions
//

import { browserHistory } from 'react-router';
import request from 'utils/request';
import {
  SOFTWARE_USERS_GROUPS,
  SOFTWARE_CURRENT_GROUP,
} from './constants';

export function getCurrentGroup(currentGroup) {
  return {
    type: SOFTWARE_CURRENT_GROUP,
    currentGroup,
  };
}

export function getGroups(groups) {
  return {
    type: SOFTWARE_USERS_GROUPS,
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
