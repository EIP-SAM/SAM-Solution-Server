//
// Combine all reducers for logs page
//

import { combineReducers } from 'redux-immutable';
import filters from './filters';
import result from './result';

export default combineReducers({
  filters,
  result,
});
