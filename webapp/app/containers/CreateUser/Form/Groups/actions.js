//
// Groups form create user actions
//

import { browserHistory } from 'react-router';
import request from 'utils/request';
import {
  GROUPS,
  SELECTED_GROUPS,
  RESET_STATE_GROUPS,
} from './constants';

export function resetStateGroups() {
  return {
    type: RESET_STATE_GROUPS,
  };
}

export function getSelectedGroup(selectedGroup) {
  return {
    type: SELECTED_GROUPS,
    selectedGroup,
  };
}

export function getGroups(groups) {
  return {
    type: GROUPS,
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
