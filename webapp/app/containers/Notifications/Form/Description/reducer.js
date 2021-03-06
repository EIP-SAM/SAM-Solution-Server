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
  NOTIFICATIONS_DESCRIPTION_ERROR,
} from './constants';

const initialState = {
  description: '',
  descriptionError: '',
};

function NotificationsFormDescriptionReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATIONS_RESET_STATE_DESCRIPTION:
      return Object.assign({}, initialState, {});
    case NOTIFICATIONS_DESCRIPTION_CHANGE:
      return Object.assign({}, state, {
        description: action.description,
      });
    case NOTIFICATIONS_DESCRIPTION_ERROR:
      return Object.assign({}, state, {
        descriptionError: action.descriptionError,
      });
    default:
      return state;
  }
}

export default NotificationsFormDescriptionReducer;
