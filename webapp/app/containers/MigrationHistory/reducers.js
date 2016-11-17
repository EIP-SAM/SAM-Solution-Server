//
// Migration Historyreducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import TableReducer from './Table/reducers';
import FiltersReducer from './Filters/reducers';

export default combineReducers({
  table: TableReducer,
  filters: FiltersReducer,
});