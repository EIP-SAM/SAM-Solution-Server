//
// Save filters Actions
//

import request from 'utils/request';
// import { getSaves } from 'containers/Save/actions'
// import { getGroupsFormUsers } from 'containers/Save/Filters/GroupsFormGroup/actions'

import {
  getTypeFormUsers,
  getGroupsFormUsers,
  getListUsers
} from 'containers/Save/Filters/actions'

export function getVisibilityFilter(typeUser, listGroupsUsers, listTypeUsers, listFilterUsers) {
  console.log("Type------listTypeUsers-------");
  console.log(listTypeUsers);
  console.log("Type------listTypeUsers-------");
  console.log("Type------listGroupsUsers-------");
  console.log(listGroupsUsers);
  console.log("Type------listGroupsUsers-------");
  console.log("Type------listFilterUsers-------");
  console.log(listFilterUsers);
  console.log("Type------listFilterUsers-------");

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
      getGroupsFormUsers(listUsers);
      getListUsers(listUsers);
    }
  }
  else {
    getTypeFormUsers(listFilterUsers);
    getListUsers(listFilterUsers);
  }
}
