//
// Dashboard reducer
//

import { DASHBOARD_GET_SAVE_NUMBER } from './constants';

const initialState = { saveNumbers: 0 };

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_GET_SAVE_NUMBER:
      return Object.assign({}, state, {
        saveNumbers: action.saveNumbers,
      });
    default:
      return state;

  }
}

export default dashboardReducer;
