//
// Selected groups form notifications reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  NOTIFICATIONS_ADD_GROUPS,
  NOTIFICATIONS_UNSELECTED_GROUPS,
  NOTIFICATIONS_REMOVE_SELECTED_GROUPS,
  NOTIFICATIONS_RESET_STATE_UNSELECTED_GROUPS,
  NOTIFICATIONS_SELECTED_GROUPS_ERROR,
} from './constants';

const initialState = {
  selectedGroups: [],
  unselectedGroups: [],
  selectedGroupsError: '',
};

function NotificationsFormSelectedGroupsReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATIONS_RESET_STATE_UNSELECTED_GROUPS:
      return Object.assign({}, initialState, {});
    case NOTIFICATIONS_ADD_GROUPS:
      return Object.assign({}, state, {
        selectedGroups: action.selectedGroups,
      });
    case NOTIFICATIONS_UNSELECTED_GROUPS:
      return Object.assign({}, state, {
        unselectedGroups: action.unselectedGroups,
      });
    case NOTIFICATIONS_REMOVE_SELECTED_GROUPS:
      return Object.assign({}, state, {
        selectedGroups: [
          ...state.selectedGroups.slice(0, action.index),
          ...state.selectedGroups.slice(action.index + 1),
        ],
        unselectedGroups: (action.nextIndex !== -1) ? [state.selectedGroups[action.nextIndex]] : [],
      });
    case NOTIFICATIONS_SELECTED_GROUPS_ERROR:
      return Object.assign({}, state, {
        selectedGroupsError: action.selectedGroupsError,
      });
    default:
      return state;
  }
}

export default NotificationsFormSelectedGroupsReducer;
