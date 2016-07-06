//
// Save Creation Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SHOW_ADD_FILE_MODAL,
  ADD_FILE,
} from './constants';

const initialState = {
  showModal: false,
  file: [],
};

function SaveHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ADD_FILE_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    case ADD_FILE:
      state.file.push(action.file);
      return Object.assign({}, state, {
        files: state.file,
      });
    default:
      return state;
  }
}

export default SaveHistoryReducer;
