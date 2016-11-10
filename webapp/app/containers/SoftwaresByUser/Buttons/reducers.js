//
// Sofwares by user buttons reducers
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import SoftwaresByUserAddAllSoftwaresModalReducer from './ModalAddAllSoftwares/reducer';
import SoftwaresByUserDeleteAllSoftwaresModalReducer from './ModalDeleteAllSoftwares/reducer';
import SoftwaresByUserUpdateAllSoftwaresModalReducer from './ModalUpdateAllSoftwares/reducer';

//
// Combine all reducers of software page
//
export default combineReducers({
  SoftwaresByUserAddAllSoftwaresModalReducer,
  SoftwaresByUserDeleteAllSoftwaresModalReducer,
  SoftwaresByUserUpdateAllSoftwaresModalReducer,
});
