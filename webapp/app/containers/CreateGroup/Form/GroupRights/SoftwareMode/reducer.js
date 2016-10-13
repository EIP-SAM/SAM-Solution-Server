//
// Software mode group rights create group reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  CREATE_GROUP_SOFTWARE_MODE_CHANGE,
} from './constants';

const initialState = {
  softwareMode: 0,
};

function CreateGroupFormGroupRightsSoftwareModeReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GROUP_SOFTWARE_MODE_CHANGE:
      return Object.assign({}, state, {
        softwareMode: action.softwareMode,
      });
    default:
      return state;
  }
}

export default CreateGroupFormGroupRightsSoftwareModeReducer;
