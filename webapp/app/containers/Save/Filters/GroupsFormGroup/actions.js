//
// Save filters Actions
//

import request from 'utils/request';
import { getSaves } from 'containers/Save/actions'
import { getTypeFormUsers } from 'containers/Save/Filters/TypeUserFormGroup/actions'

import {
  GET_GROUPS,
  GET_USERS,
} from './constants'

export function getGroups(listGroups) {
  return {
     type: GET_GROUPS,
     listGroups,
  };
}

export function getGroupsFormUsers(listGroupsUsers) {
  return {
    type: GET_USERS,
    listGroupsUsers,
  };
}

export function getVisibilityFilter(groupFilter, listGroups, listTypeUsers, listGroupsUsers) {
  return function returnGetvisibilityFilter(dispatch) {
    return request
    .get('/api/logged-in/admin/save')
    .end((err, res) => {
      const listUsers = [];
      let saves = [];
      if (groupFilter != -1) {
        if (listTypeUsers != 'undefined' && listTypeUsers != null && listTypeUsers.length > 0){
          saves = listTypeUsers;
        }
        else {
            saves = listGroupsUsers;
        }
        if (saves.length > 0 && listGroups[groupFilter]['users'] !== undefined && listGroups[groupFilter]['users'].length > 0){
          listGroups[groupFilter]['users'].map(function(user){
            saves.map(function(save){
              if(user.id == save.id){
                listUsers.push(save);
              }
            });
          });
          getGroupsFormUsers(listTypeUsers);
          dispatch(getTypeFormUsers(listUsers));
          dispatch(getSaves(listUsers));
        }
      }
      else {
        getGroupsFormUsers(res.body);
        dispatch(getSaves(res.body));
      }
    });
  };
}

export function getGroupsRequest() {
  return function returnGetGroups(dispatch) {
    return request
    .get('/api/logged-in/admin/groups')
    .end((err, res) => {
        dispatch(getGroups(res.body));
      }
    );
  };
}
