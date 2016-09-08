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
  RESET_STATE_DATE,
  DATE,
  DATE_ERROR,
} from './constants';

const initialState = {
  date: '',
  dateError: '',
};

function SaveCreationFormDateReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_DATE:
      return Object.assign({}, initialState, {});
    case DATE:
      return Object.assign({}, state, {
        date: action.date,
      });
    case DATE_ERROR:
      return Object.assign({}, state, {
        dateError: action.dateError,
      });
    default:
      return state;
  }
}

export default SaveCreationFormDateReducer;
