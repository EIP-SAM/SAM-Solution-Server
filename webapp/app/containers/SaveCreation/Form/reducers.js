//
// Form save creation reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import SaveCreationFormUsersReducer from './Users/reducer';
import SaveCreationFormDateReducer from './Date/reducer';
import SaveCreationFormTimeReducer from './Time/reducer';
import SaveCreationFormFrequencyReducer from './Frequency/reducer';
import SaveCreationFormFilesReducer from './Files/reducers';

export default combineReducers({
  SaveCreationFormUsersReducer,
  SaveCreationFormDateReducer,
  SaveCreationFormTimeReducer,
  SaveCreationFormFrequencyReducer,
  SaveCreationFormFilesReducer,
});
