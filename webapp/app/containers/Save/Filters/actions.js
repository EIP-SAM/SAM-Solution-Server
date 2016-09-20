//
// Save filters Actions
//

import request from 'utils/request';

import {
  GET_TYPE_USERS,
  GET_GROUP_USERS,
  GET_LIST_USERS,
} from './constants'

export function getTypeFormUsers(listTypeUsers) {
  console.log("Filter getTypeFormUsers");
  return {
    type: GET_TYPE_USERS,
    listTypeUsers,
  };
}

export function getGroupsFormUsers(listGroupsUsers) {
  console.log("Filter listGroupsUsers");
  return {
    type: GET_GROUP_USERS,
    listGroupsUsers,
  };
}

export function getListUsers(listUsers) {
  console.log("Filter listUsers");
  return {
    type: GET_LIST_USERS,
    listUsers,
  };
}

export function getListUsersRequest() {
  return function returnGetListUsersRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/save')
      .end((err, res) => {
        console.log("dispatch getTypeFormUsers");
        dispatch(getTypeFormUsers(res.body));
        console.log("dispatch getGroupsFormUsers");
        dispatch(getGroupsFormUsers(res.body));
        console.log("dispatch getListUsers");
        dispatch(getListUsers(res.body));
      }
    );
  };
}
