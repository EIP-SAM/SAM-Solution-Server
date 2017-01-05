//
// Software addition modal software by user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import SOFTWARES_BY_USER_SHOW_ADD_SOFTWARE_MODAL from './constants';

const initialState = {
  showModal: false,
};

function SoftwaresByUserAddSoftwareModalReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARES_BY_USER_SHOW_ADD_SOFTWARE_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    default:
      return state;
  }
}

export default SoftwaresByUserAddSoftwareModalReducer;
