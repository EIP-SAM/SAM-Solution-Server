//
// Save filters Actions
//

import request from 'utils/request';
import {
  getTypeFormUsers,
  getGroupsFormUsers,
  getListUsers
} from 'containers/Save/Filters/actions'

import {
  GET_GROUPS,
} from './constants'

export function getGroups(listGroups) {
  return {
     type: GET_GROUPS,
     listGroups,
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

export function getVisibilityFilter(groupFilter, listGroups, listTypeUsers, listGroupsUsers, listFilterUsers) {
  console.log("Groups------listTypeUsers-------");
  console.log(listTypeUsers);
  console.log("Groups------listTypeUsers-------");
  console.log("Groups------listGroupsUsers-------");
  console.log(listGroupsUsers);
  console.log("Groups------listGroupsUsers-------");
  console.log("Groups------listFilterUsers-------");
  console.log(listFilterUsers);
  console.log("Groups------listFilterUsers-------");

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
        getTypeFormUsers(listUsers);
        getListUsers(listUsers);
      }
    }
    else {
      getGroupsFormUsers(listFilterUsers);
      getListUsers(listFilterUsers);
    }
}
