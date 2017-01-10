//
// restore filters Actions
//
import { getRestores } from 'containers/Restore/actions';
import RESTORE_GET_ALL_USERS from './constants';

export function getAllUsers(allUsers) {
  return {
    type: RESTORE_GET_ALL_USERS,
    allUsers,
  };
}

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
export function filterUsers(currentTypeUser, currentGroup, allUsers) {
  return function returnGetRestoreRequest(dispatch) {
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
    dispatch(getRestores(filteredUser));
  };
}
