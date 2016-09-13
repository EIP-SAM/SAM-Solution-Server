//
// Restore form creation reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import UsersRestoreCreationReducer from './Users/reducer';
import SavesRestoreCreationReducer from './Saves/reducer';
import FilesRestoreCreationReducer from './Files/reducer';

export default combineReducers({
  UsersRestoreCreationReducer,
  SavesRestoreCreationReducer,
  FilesRestoreCreationReducer,
});
