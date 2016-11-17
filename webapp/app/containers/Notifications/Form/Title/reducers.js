//
// title form notifications reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  NOTIFICATIONS_TITLE_CHANGE,
  NOTIFICATIONS_RESET_STATE_TITLE,
  NOTIFICATIONS_TITLE_ERROR,
} from './constants';

const initialState = {
  title: '',
};

function NotificationsFormTitleReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATIONS_RESET_STATE_TITLE:
      return Object.assign({}, initialState, {});
    case NOTIFICATIONS_TITLE_CHANGE:
      return Object.assign({}, state, {
        title: action.title,
      });
    case NOTIFICATIONS_TITLE_ERROR:
      return Object.assign({}, state, {
        titleError: action.titleError,
      });
    default:
      return state;
  }
}

export default NotificationsFormTitleReducer;
