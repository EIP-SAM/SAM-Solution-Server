//
// Edit group actions
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
import saveRestoreModeChange from './GroupRights/SaveRestoreMode/actions';
import migrationModeChange from './GroupRights/MigrationMode/actions';
import softwareModeChange from './GroupRights/SoftwareMode/actions';
import {
  resetStateGroupName,
  groupNameErrorMsg,
  groupNameChange,
} from './GroupName/actions';

import {
  EDIT_GROUP_ID,
  EDIT_GROUP_RESET_USER_ID,
} from './constants';

export function resetStateGroupId() {
  return {
    type: EDIT_GROUP_RESET_USER_ID,
  };
}

export function resetStateForm() {
  return function resetState(dispatch) {
    dispatch(resetStateGroupId());
    dispatch(resetStateGroupName());
  };
}

export function getGroupId(userId) {
  return {
    type: EDIT_GROUP_ID,
    userId,
  };
}

export function getGroupRequest(groupId) {
  return function returnGetGroupRequest(dispatch) {
    return request
      .get(`/api/logged-in/admin/group?id=${groupId}`)
      .end((err, res) => {
        request.redirectHandling(res.statusCode);
        dispatch(getGroupId(res.body.id));
        dispatch(groupNameChange(res.body.name));
        dispatch(saveRestoreModeChange(res.body.saveAndRestoreMode));
        dispatch(migrationModeChange(res.body.migrationMode));
        dispatch(softwareModeChange(res.body.softwarePackagesMode));
      });
  };
}

export function editGroupRequest(groupId, groupName, saveRestoreMode, migrationMode, softwareMode, selectedUsers) {
  const users = selectedUsers.map(user => user.id);

  const group = {
    id: groupId,
    name: groupName,
    saveAndRestoreMode: saveRestoreMode,
    migrationMode,
    softwarePackagesMode: softwareMode,
    users,
  };

  return function returnEditGroupRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/group/update')
      .type('json')
      .send(group)
      .end((err, res) => {
        request.redirectHandling(res.statusCode);
        if (res.body.errors && res.body.errors[0].error.includes('name')) {
          dispatch(groupNameErrorMsg(res.body.errors[0].error));
        } else {
          dispatch(resetStateForm());
          browserHistory.goBack();
        }
      });
  };
}
