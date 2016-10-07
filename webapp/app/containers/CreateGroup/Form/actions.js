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
import { resetStateGroupName } from './GroupName/actions';

export function resetStateForm() {
  return function resetState(dispatch) {
    dispatch(resetStateGroupName());
  };
}

export function createGroupRequest(groupName, saveRestoreMode, migrationMode, softwareMode) {
  const groups = [{
    name: groupName,
    saveAndRestoreMode: saveRestoreMode,
    migrationMode,
    softwarePackagesMode: softwareMode,
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

        dispatch(resetStateForm());
        browserHistory.goBack();
      });
  };
}
