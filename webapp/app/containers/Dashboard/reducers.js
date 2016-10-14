//
// Dashboard reducer
//

import {
  DASHBOARD_GET_SAVE_NUMBER,
  DASHBOARD_GET_RESTORE_NUMBER,
  DASHBOARD_GET_DEAMON_USER_CONNECTED,
} from './constants';

const initialState = { saveNumbers: 0 };

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_GET_SAVE_NUMBER:
      return Object.assign({}, state, {
        saveNumbers: action.saveNumbers,
      });
    case DASHBOARD_GET_RESTORE_NUMBER:
      return Object.assign({}, state, {
        restoreNumbers: action.restoreNumbers,
      });
    case DASHBOARD_GET_DEAMON_USER_CONNECTED:
      return Object.assign({}, state, {
        deamonUsersConnected: action.deamonUsersConnected,
      });
    default:
      return state;

  }
}

export default dashboardReducer;
