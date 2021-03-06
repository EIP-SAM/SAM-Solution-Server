//
// Modal reboot user button header page dashboard by user page
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import DASHBOARD_BY_USER_SHOW_INSTANT_REBOOT_MODAL from './constants';

const initialState = {
  showModal: false,
};

function DashboardByUserRebootModalReducer(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_BY_USER_SHOW_INSTANT_REBOOT_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    default:
      return state;
  }
}

export default DashboardByUserRebootModalReducer;
