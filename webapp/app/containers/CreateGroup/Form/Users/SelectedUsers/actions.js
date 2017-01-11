//
// Selected users form create group actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  CREATE_GROUP_ADD_USERS_IN_GROUP,
  CREATE_GROUP_UNSELECTED_USERS,
  CREATE_GROUP_REMOVE_SELECTED_USERS,
  CREATE_GROUP_RESET_STATE_UNSELECTED_USERS,
} from './constants';

export function resetStateSelectedUsers() {
  return {
    type: CREATE_GROUP_RESET_STATE_UNSELECTED_USERS,
  };
}

export function addUsersToGroup(selectedUsers) {
  return {
    type: CREATE_GROUP_ADD_USERS_IN_GROUP,
    selectedUsers,
  };
}

export function unselectedUsersOnChange(unselectedUsers) {
  return {
    type: CREATE_GROUP_UNSELECTED_USERS,
    unselectedUsers,
  };
}

function removeSelectedUserFromGroup(index, nextIndex) {
  return {
    type: CREATE_GROUP_REMOVE_SELECTED_USERS,
    index,
    nextIndex,
  };
}

export function removeUsersFromGroup(selectedUsers, unselectedUsers) {
  let allSelectedUsers = selectedUsers;
  return function returnRemoveUsers(dispatch) {
    for (const unselectedUser of unselectedUsers) {
      for (const selectedUser of allSelectedUsers) {
        if (selectedUser.id === unselectedUser.id) {
          const index = allSelectedUsers.indexOf(selectedUser);
          let nextIndex = index + 1;
          let newSelectedUsers = allSelectedUsers.slice(0, index);
          newSelectedUsers = allSelectedUsers.slice(index + 1);

          if (newSelectedUsers.length === 0 && allSelectedUsers.length > 1) {
            nextIndex = index - 1;
          } else if (newSelectedUsers.length === 0) {
            nextIndex = -1;
          }

          dispatch(removeSelectedUserFromGroup(index, nextIndex));
          allSelectedUsers = newSelectedUsers;
          break;
        }
      }
    }
  };
}
