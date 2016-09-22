//
// Files modal save creation reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SHOW_ADD_FILE_MODAL,
  INPUT_FILE_CHANGE,
} from './constants';

const initialState = {
  showModal: false,
  inputFileChange: '',
};

function SaveCreationFormFilesModalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ADD_FILE_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    case INPUT_FILE_CHANGE:
      return Object.assign({}, state, {
        inputFileChange: action.inputFileChange,
      });
    default:
      return state;
  }
}

export default SaveCreationFormFilesModalReducer;
