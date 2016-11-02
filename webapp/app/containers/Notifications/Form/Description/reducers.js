//
// Description form notifications reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  NOTIFICATIONS_DESCRIPTION_CHANGE,
  NOTIFICATIONS_RESET_STATE_DESCRIPTION,
} from './constants';

const initialState = {
  description: '',
};

function NotificationsFormDescriptionReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATIONS_RESET_STATE_DESCRIPTION:
      return Object.assign({}, initialState, {});
    case NOTIFICATIONS_DESCRIPTION_CHANGE:
      return Object.assign({}, state, {
        description: action.description,
      });
    default:
      return state;
  }
}

export default NotificationsFormDescriptionReducer;
