//
// users filters Actions
//
import { getUsers } from 'containers/Users/actions';
import {
  USERS_GET_ALL_USERS,
} from './constants';

export function getAllUsers(allUsers) {
  return {
    type: USERS_GET_ALL_USERS,
    allUsers,
  };
}

export function filterUsers(currentTypeUser, currentGroup, allUsers) {
  return function returnGetUsersRequest(dispatch) {
    let filteredUser = allUsers.map((user) => {
      switch (currentTypeUser) {
        case 'All':
          return user;
        case 'Admins':
          if (user.isAdmin) {
            return user;
          }
          break;
        case 'Users':
          if (!user.isAdmin) {
            return user;
          }
          break;
        default:
          return '';
      }
    });
    filteredUser = filteredUser.filter(n => n !== undefined);
    if (currentGroup !== 'All') {
      filteredUser = filteredUser.map((user) => {
        for (const group of user.groups) {
          if (group.name === currentGroup) {
            return user;
          }
        }
      });
    }
    filteredUser = filteredUser.filter(n => n !== undefined);
    dispatch(getUsers(filteredUser));
  };
}
