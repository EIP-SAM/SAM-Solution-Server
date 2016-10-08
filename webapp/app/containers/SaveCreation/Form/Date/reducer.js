//
// Date form save creation reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SAVE_CREATION_RESET_STATE_DATE,
  SAVE_CREATION_DATE,
  SAVE_CREATION_DATE_ERROR,
  SAVE_CREATION_DATE_DISABLED,
} from './constants';

const initialState = {
  date: '',
  dateError: '',
  isDateDisabled: false,
};

function SaveCreationFormDateReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CREATION_RESET_STATE_DATE:
      return Object.assign({}, initialState, {});
    case SAVE_CREATION_DATE_DISABLED:
      return Object.assign({}, state, {
        isDateDisabled: action.isDateDisabled,
      });
    case SAVE_CREATION_DATE:
      return Object.assign({}, state, {
        date: action.date,
      });
    case SAVE_CREATION_DATE_ERROR:
      return Object.assign({}, state, {
        dateError: action.dateError,
      });
    default:
      return state;
  }
}

export default SaveCreationFormDateReducer;
