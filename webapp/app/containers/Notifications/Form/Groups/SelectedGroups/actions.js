//
// Selected groups form notifications actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  NOTIFICATIONS_ADD_GROUPS,
  NOTIFICATIONS_UNSELECTED_GROUPS,
  NOTIFICATIONS_REMOVE_SELECTED_GROUPS,
  NOTIFICATIONS_RESET_STATE_UNSELECTED_GROUPS,
  NOTIFICATIONS_SELECTED_GROUPS_ERROR,
} from './constants';

export function resetStateSelectedGroups() {
  return {
    type: NOTIFICATIONS_RESET_STATE_UNSELECTED_GROUPS,
  };
}

export function addGroups(selectedGroups) {
  return {
    type: NOTIFICATIONS_ADD_GROUPS,
    selectedGroups,
  };
}

export function unselectedGroupsOnChange(unselectedGroups) {
  return {
    type: NOTIFICATIONS_UNSELECTED_GROUPS,
    unselectedGroups,
  };
}

function removeSelectedGroup(index, nextIndex) {
  return {
    type: NOTIFICATIONS_REMOVE_SELECTED_GROUPS,
    index,
    nextIndex,
  };
}

export function selectedGroupsErrorMsg(selectedGroupsError) {
  return {
    type: NOTIFICATIONS_SELECTED_GROUPS_ERROR,
    selectedGroupsError,
  };
}

export function removeGroupsSelected(selectedGroups, unselectedGroups) {
  let allSelectedGroups = selectedGroups;
  return function returnRemoveGroupsSelected(dispatch) {
    for (const unselectedGroup of unselectedGroups) {
      for (const selectedGroup of allSelectedGroups) {
        if (selectedGroup.id === unselectedGroup.id) {
          const index = allSelectedGroups.indexOf(selectedGroup);
          let nextIndex = index + 1;
          let newSelectedGroups = allSelectedGroups.slice(0, index);
          newSelectedGroups = allSelectedGroups.slice(index + 1);

          if (newSelectedGroups.length === 0 && allSelectedGroups.length > 1) {
            nextIndex = index - 1;
          } else if (newSelectedGroups.length === 0) {
            nextIndex = -1;
          }

          dispatch(removeSelectedGroup(index, nextIndex));
          allSelectedGroups = newSelectedGroups;
          break;
        }
      }
    }
  };
}
