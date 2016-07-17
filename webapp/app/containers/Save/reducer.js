//
// Save Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_SAVES,
  GET_USERS,
  SHOW_INSTANT_SAVE_MODAL,
} from './constants';

const initialState = {
  saves: [],
  users: [],
  showInstantSaveModal: false,
};

function SaveReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SAVES:
      return Object.assign({}, state, {
        saves: action.saves,
      });
    case GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case SHOW_INSTANT_SAVE_MODAL:
      return Object.assign({}, state, {
        showInstantSaveModal: action.showInstantSaveModal,
      });
    default:
      return state;
  }
}

export default SaveReducer;
