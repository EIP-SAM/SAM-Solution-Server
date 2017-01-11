//
// Selected users form notifications actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  NOTIFICATIONS_ADD_USERS,
  NOTIFICATIONS_UNSELECTED_USERS,
  NOTIFICATIONS_REMOVE_SELECTED_USERS,
  NOTIFICATIONS_RESET_STATE_UNSELECTED_USERS,
  NOTIFICATIONS_SELECTED_USERS_ERROR,
} from './constants';

export function resetStateSelectedUsers() {
  return {
    type: NOTIFICATIONS_RESET_STATE_UNSELECTED_USERS,
  };
}

export function addUsers(selectedUsers) {
  return {
    type: NOTIFICATIONS_ADD_USERS,
    selectedUsers,
  };
}

export function unselectedUsersOnChange(unselectedUsers) {
  return {
    type: NOTIFICATIONS_UNSELECTED_USERS,
    unselectedUsers,
  };
}

function removeSelectedUser(index, nextIndex) {
  return {
    type: NOTIFICATIONS_REMOVE_SELECTED_USERS,
    index,
    nextIndex,
  };
}

export function selectedUsersErrorMsg(selectedUsersError) {
  return {
    type: NOTIFICATIONS_SELECTED_USERS_ERROR,
    titleError,
  };
}

export function removeUsersSelected(selectedUsers, unselectedUsers) {
  return function returnRemoveUsersSelected(dispatch) {
    for (const unselectedUser of unselectedUsers) {
      for (const selectedUser of selectedUsers) {
        if (selectedUser.id === unselectedUser.id) {
          const index = selectedUsers.indexOf(selectedUser);
          let nextIndex = index + 1;
          let newSelectedUsers = selectedUsers.slice(0, index);
          newSelectedUsers = selectedUsers.slice(index + 1);

          if (newSelectedUsers.length === 0 && selectedUsers.length > 1) {
            nextIndex = index - 1;
          } else if (newSelectedUsers.length === 0) {
            nextIndex = -1;
          }

          dispatch(removeSelectedUser(index, nextIndex));
          selectedUsers = newSelectedUsers;
          break;
        }
      }
    }
  };
}
