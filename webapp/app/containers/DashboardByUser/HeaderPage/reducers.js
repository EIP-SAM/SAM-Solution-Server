//
// Dashboard by user header page reducers
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import DashboardByUserRebootModalReducer from './Button/ModalRebootUser/reducer';

//
// Combine all reducers of header page dashboard by page page
//
export default combineReducers({
  DashboardByUserRebootModalReducer,
});
