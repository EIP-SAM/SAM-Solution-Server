//
// Time form Save Creation  Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  RESET_STATE_TIME,
  TIME,
  TIME_ERROR,
  TIME_DISABLED,
} from './constants';

const initialState = {
  time: '',
  timeError: '',
  isTimeDisabled: false,
};

function SaveCreationFormTimeReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_TIME:
      return Object.assign({}, initialState, {});
    case TIME_DISABLED:
      return Object.assign({}, state, {
        isTimeDisabled: action.isTimeDisabled,
      });
    case TIME:
      return Object.assign({}, state, {
        time: action.time,
      });
    case TIME_ERROR:
      return Object.assign({}, state, {
        timeError: action.timeError,
      });
    default:
      return state;
  }
}

export default SaveCreationFormTimeReducer;
