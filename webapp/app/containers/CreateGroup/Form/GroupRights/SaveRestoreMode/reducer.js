//
// Save & Restore mode group rights create group reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import CREATE_GROUP_SAVE_RESTORE_MODE_CHANGE from './constants';

const initialState = {
  saveRestoreMode: 0,
};

function CreateGroupFormGroupRightsSaveRestoreModeReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GROUP_SAVE_RESTORE_MODE_CHANGE:
      return Object.assign({}, state, {
        saveRestoreMode: action.saveRestoreMode,
      });
    default:
      return state;
  }
}

export default CreateGroupFormGroupRightsSaveRestoreModeReducer;
