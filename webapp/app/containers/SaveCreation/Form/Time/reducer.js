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
  SAVE_CREATION_RESET_STATE_TIME,
  SAVE_CREATION_TIME,
  SAVE_CREATION_TIME_ERROR,
  SAVE_CREATION_TIME_DISABLED,
} from './constants';

const initialState = {
  time: '',
  timeError: '',
  isTimeDisabled: false,
};

function SaveCreationFormTimeReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CREATION_RESET_STATE_TIME:
      return Object.assign({}, initialState, {});
    case SAVE_CREATION_TIME_DISABLED:
      return Object.assign({}, state, {
        isTimeDisabled: action.isTimeDisabled,
      });
    case SAVE_CREATION_TIME:
      return Object.assign({}, state, {
        time: action.time,
      });
    case SAVE_CREATION_TIME_ERROR:
      return Object.assign({}, state, {
        timeError: action.timeError,
      });
    default:
      return state;
  }
}

export default SaveCreationFormTimeReducer;
