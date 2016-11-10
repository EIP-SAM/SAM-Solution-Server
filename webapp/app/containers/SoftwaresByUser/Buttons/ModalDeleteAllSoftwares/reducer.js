//
// User software modal delete all softwares by user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SOFTWARES_BY_USER_SHOW_DELETE_ALL_SOFTWARES_MODAL,
} from './constants';

const initialState = {
  showModal: false,
};

function SoftwaresByUserDeleteAllSoftwaresModalReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARES_BY_USER_SHOW_DELETE_ALL_SOFTWARES_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    default:
      return state;
  }
}

export default SoftwaresByUserDeleteAllSoftwaresModalReducer;
