//
// Dashboard reducer
//

import {
  DASHBOARD_GET_SAVE_NUMBER,
  DASHBOARD_GET_RESTORE_NUMBER,
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
    default:
      return state;

  }
}

export default dashboardReducer;
