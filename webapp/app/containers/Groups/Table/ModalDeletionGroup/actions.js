//
// Group deletion modal in groups actions
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
  getGroupsRequest,
  removeAlert,
} from 'containers/Groups/actions';

import {
  GROUPS_SHOW_INSTANT_DELETE_MODAL,
  GROUPS_GROUP_TO_DELETE,
} from './constants';

export function showInstantDeleteModal() {
  return {
    type: GROUPS_SHOW_INSTANT_DELETE_MODAL,
    showModal: true,
  };
}

export function hideInstantDeleteModal() {
  return {
    type: GROUPS_SHOW_INSTANT_DELETE_MODAL,
    showModal: false,
  };
}

export function groupToDelete(groupName, groupId) {
  return {
    type: GROUPS_GROUP_TO_DELETE,
    groupName,
    groupId,
  };
}

export function deleteGroup(groupId, groupName) {
  const group = {
    id: groupId,
    name: groupName,
  };
  return function returnDeleteGroup(dispatch) {
    return request
    .post('/api/logged-in/admin/group/delete')
    .type('json')
    .send(group)
    .end((err, res) => {
      if (err && res.statusCode === 401) {
        browserHistory.push('/login');
      }

      dispatch(removeAlert());
      dispatch(getGroupsRequest());
    });
  };
}
