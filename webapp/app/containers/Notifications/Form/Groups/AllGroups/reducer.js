//
// All groups form notifications reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  NOTIFICATIONS_GET_GROUPS,
  NOTIFICATIONS_PRE_SELECTED_GROUPS,
  NOTIFICATIONS_REMOVE_GROUPS,
  NOTIFICATIONS_RESET_STATE_ALL_GROUPS,
} from './constants';

const initialState = {
  groups: [],
  preSelectedGroups: [],
};

function NotificationsFormAllGroupsReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATIONS_RESET_STATE_ALL_GROUPS:
      return Object.assign({}, initialState, {});
    case NOTIFICATIONS_GET_GROUPS:
      return Object.assign({}, state, {
        groups: action.groups,
      });
    case NOTIFICATIONS_PRE_SELECTED_GROUPS:
      return Object.assign({}, state, {
        preSelectedGroups: action.preSelectedGroups,
      });
    case NOTIFICATIONS_REMOVE_GROUPS:
      return Object.assign({}, state, {
        groups: [
          ...state.groups.slice(0, action.index),
          ...state.groups.slice(action.index + 1),
        ],
        preSelectedGroups: (action.nextIndex !== -1) ? [state.groups[action.nextIndex]] : [],
      });
    default:
      return state;
  }
}

export default NotificationsFormAllGroupsReducer;
