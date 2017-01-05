//
// CreateGroup actions
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
import { resetStateAllUsers } from './Users/AllUsers/actions';
import { resetStateSelectedUsers } from './Users/SelectedUsers/actions';
import {
  resetStateGroupName,
  groupNameErrorMsg,
} from './GroupName/actions';

export function resetStateForm() {
  return function resetState(dispatch) {
    dispatch(resetStateGroupName());
    dispatch(resetStateAllUsers());
    dispatch(resetStateSelectedUsers());
  };
}

export function createGroupRequest(groupName, saveRestoreMode, migrationMode, softwareMode, selectedUsers) {
  const users = selectedUsers.map(user => user.id);

  const groups = [{
    name: groupName,
    saveAndRestoreMode: saveRestoreMode,
    migrationMode,
    softwarePackagesMode: softwareMode,
    users,
  }];

  return function returnCreateGroupRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/groups/create')
      .type('json')
      .send({ groups })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        if (res.body.errors && res.body.errors[0].error.includes('name')) {
          dispatch(groupNameErrorMsg(res.body.errors[0].error));
        } else {
          dispatch(resetStateForm());
          browserHistory.goBack();
        }
      });
  };
}
