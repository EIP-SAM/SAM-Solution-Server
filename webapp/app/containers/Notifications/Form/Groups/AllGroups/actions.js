//
// All groups form notifications actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  NOTIFICATIONS_GET_GROUPS,
  NOTIFICATIONS_PRE_SELECTED_GROUPS,
  NOTIFICATIONS_REMOVE_GROUPS,
  NOTIFICATIONS_RESET_STATE_ALL_GROUPS,
} from './constants';

export function resetStateAllGroups() {
  return {
    type: NOTIFICATIONS_RESET_STATE_ALL_GROUPS,
  };
}

export function getGroups(groups) {
  return {
    type: NOTIFICATIONS_GET_GROUPS,
    groups,
  };
}

export function preSelectedGroupsOnChange(preSelectedGroups) {
  return {
    type: NOTIFICATIONS_PRE_SELECTED_GROUPS,
    preSelectedGroups,
  };
}

function removeGroup(index, nextIndex) {
  return {
    type: NOTIFICATIONS_REMOVE_GROUPS,
    index,
    nextIndex,
  };
}

export function removeGroups(groups, preSelectedGroups) {
  let allGroups = groups;
  return function returnRemoveGroups(dispatch) {
    for (const preSelectedGroup of preSelectedGroups) {
      for (const group of allGroups) {
        if (group.id === preSelectedGroup.id) {
          const index = allGroups.indexOf(group);
          let nextIndex = index + 1;
          let newGroups = allGroups.slice(0, index);
          newGroups = allGroups.slice(index + 1);

          if (newGroups.length === 0 && allGroups.length > 1) {
            nextIndex = index - 1;
          } else if (newGroups.length === 0) {
            nextIndex = -1;
          }

          dispatch(removeGroup(index, nextIndex));
          allGroups = newGroups;
          break;
        }
      }
    }
  };
}
