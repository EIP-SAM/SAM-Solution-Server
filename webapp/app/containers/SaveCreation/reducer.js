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
  RESET_STATE,
  SHOW_ADD_FILE_MODAL,
  LIST_USERS,
  DATE,
  TIME,
  FREQUENCY,
  ADD_FILE,
  ADD_ALL_FILES,
  CAN_ADD_FILE,
  INPUT_FILE_CHANGE,
} from './constants';

const initialState = {
  showModal: false,
  users: [],
  date: '',
  time: '',
  files: [],
  canAddFile: true,
  inputFileChange: '',
};

function SaveHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE:
      return Object.assign({}, initialState, {
        files: [],
      });
    case SHOW_ADD_FILE_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    case LIST_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case DATE:
      return Object.assign({}, state, {
        date: action.date,
      });
    case TIME:
      return Object.assign({}, state, {
        time: action.time,
      });
    case FREQUENCY:
      return Object.assign({}, state, {
        frequency: action.frequency,
      });
    case ADD_FILE:
      state.files.push(action.file);
      return Object.assign({}, state, {
        files: state.files,
      });
    case ADD_ALL_FILES:
      const files = action.files.split(',');
      return Object.assign({}, state, {
        files,
      });
    case CAN_ADD_FILE:
      return Object.assign({}, state, {
        canAddFile: action.canAddFile,
      });
    case INPUT_FILE_CHANGE:
      return Object.assign({}, state, {
        inputFileChange: action.inputFileChange,
      });
    default:
      return state;
  }
}

export default SaveHistoryReducer;
