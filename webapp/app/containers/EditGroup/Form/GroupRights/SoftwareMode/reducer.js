//
// Software mode group rights edit group reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import EDIT_GROUP_SOFTWARE_MODE_CHANGE from './constants';

const initialState = {
  softwareMode: 0,
};

function EditGroupFormGroupRightsSoftwareModeReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_GROUP_SOFTWARE_MODE_CHANGE:
      return Object.assign({}, state, {
        softwareMode: action.softwareMode,
      });
    default:
      return state;
  }
}

export default EditGroupFormGroupRightsSoftwareModeReducer;
