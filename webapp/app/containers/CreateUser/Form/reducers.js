//
// Form create user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import CreateUserFormUsernameReducer from './Username/reducer';
import CreateUserFormEmailReducer from './Email/reducer';
import CreateUserFormPasswordReducer from './Password/reducer';
import CreateUserFormPasswordConfirmationReducer from './PasswordConfirmation/reducer';
import CreateUserFormGroupsReducer from './Groups/reducer';

export default combineReducers({
  CreateUserFormUsernameReducer,
  CreateUserFormEmailReducer,
  CreateUserFormPasswordReducer,
  CreateUserFormPasswordConfirmationReducer,
  CreateUserFormGroupsReducer,
});
