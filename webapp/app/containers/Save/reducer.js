//
// Save Module Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  RESET_STATE_SAVING,
  LIST_USERS,
  DATE,
  TIME,
  FREQUENCY,
  ADD_FILE,
  ADD_ALL_FILES,
} from './constants';

const initialState = {
  users: [],
  date: '',
  time: '',
  frequency: '',
  files: [],
};

function SavingReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_SAVING:
      return Object.assign({}, initialState, {
        files: [],
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

export default SavingReducer;
