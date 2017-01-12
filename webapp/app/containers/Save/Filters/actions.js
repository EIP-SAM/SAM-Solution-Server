//
// Save filters Actions
//
import { getSaves } from 'containers/Save/actions';
import SAVE_GET_ALL_USERS from './constants';

export function getAllUsers(allUsers) {
  return {
    type: SAVE_GET_ALL_USERS,
    allUsers,
  };
}

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
export function filterUsers(currentTypeUser, currentGroup, allUsers) {
  return function returnGetSavesRequest(dispatch) {
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
      return '';
    });
    filteredUser = filteredUser.filter(n => n !== '');
    if (currentGroup !== 'All') {
      filteredUser = filteredUser.map((user) => {
        for (const group of user.groups) {
          if (group.name === currentGroup) {
            return user;
          }
        }
        return '';
      });
    }
    filteredUser = filteredUser.filter(n => n !== '');
    dispatch(getSaves(filteredUser));
  };
}
