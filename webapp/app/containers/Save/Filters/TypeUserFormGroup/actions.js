//
// Save filters Actions
//

import request from 'utils/request';
import { getSaves } from 'containers/Save/actions'
import { getGroupsFormUsers } from 'containers/Save/Filters/GroupsFormGroup/actions'

import {
  GET_USERS,
} from './constants'

export function getTypeFormUsers(listTypeUsers) {
  return {
    type: GET_USERS,
    listTypeUsers,
  };
}

export function getVisibilityFilter(typeUser, listGroupsUsers, listTypeUsers) {
  return function returnGetvisibilityFilter(dispatch) {
    return request
    .get('/api/logged-in/admin/save')
    .end((err, res) => {
      const listUsers = [];
      let saves = [];
      if (typeUser !== 'All') {
        if (listGroupsUsers != 'undefined' && listGroupsUsers != null && listGroupsUsers.length > 0){
          saves = listGroupsUsers;
        }
        else {
          saves = listTypeUsers;
        }
        if (saves.length > 0) {
          saves.map(function (save) {
            if (typeUser === 'Admins' && save.isAdmin === true) {
              listUsers.push(save);
            }
            else if (typeUser === 'Users' && save.isAdmin === false) {
              listUsers.push(save);
            }
          });
          getTypeFormUsers(listGroupsUsers);
          dispatch(getGroupsFormUsers(listUsers));
          dispatch(getSaves(listUsers));
        }
      }
      else {
        dispatch(getTypeFormUsers(res.body));
        dispatch(getSaves(res.body));
      }
    });
  };
}
