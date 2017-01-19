//
// Dashboard by user reducers
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import DashboardByUserHeaderPageReducers from './HeaderPage/reducers';

//
// Combine all reducers of dashboard by page page
//
export default combineReducers({
  DashboardByUserHeaderPageReducers,
});
