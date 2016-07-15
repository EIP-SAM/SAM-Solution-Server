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
  LIST_USERS,
  DATE,
  TIME,
  FREQUENCY,
  ADD_FILE,
  ADD_ALL_FILES,
} from './constants';

const initialState = {
  showModal: false,
  users: [],
  date: '',
  time: '',
  files: [],
};

function SaveHistoryReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}

export default SaveHistoryReducer;
