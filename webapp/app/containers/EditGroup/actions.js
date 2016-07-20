//
// EditGroup actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import request from 'utils/request';

import {
  EDIT_GROUP,
  GET_GROUP,
  SAVE_DATA,
} from './constants';

export function onChangeData(groupname, saveAndRestoreMode, migrationMode, softwarePackagesMode) {
  return {
    type: SAVE_DATA,
    groupname: groupname,
    saveAndRestoreMode: saveAndRestoreMode,
    migrationMode: migrationMode,
    softwarePackages: softwarePackages,
  };
}

export function getGroup(group) {
  return {
    type: GET_GROUP,
    displayedGroupname: group.name,
    displayedSaveAndRestoreMode: group.saveAndRestoreMode,
    displayedMigrationMode: group.migrationMode,
    displayedSoftwarePackagesMode: group.softwarePackagesMode,
  };
}

export function getGroupRequest(groupname) {
  return function returnGetGroupRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/groups')
      .end((err, res) => {
        var i = 0;
        while (i < res.body.groups.length && res.body.groups[i].name != groupname) {
          ++i;
        }
        dispatch(getGroup(res.body.groups[i]));
      });
  };
}

export function editGroup(group) {
  return {
    type: EDIT_GROUP,
    group: group,
  };
}

export function editGroupRequest(groupname, saveAndRestoreMode, migrationMode, softwarePackages) {
  return function returnEditGroupRequest(dispatch) {
    return request
      .post('/api/logged-in/groups/update')
      .type('form')
      .send({ groupname, saveAndRestoreMode, migrationMode, softwarePackages })
      .end((err, res) => {
        dispatch(editGroup(res.body));
      });
  };
}
