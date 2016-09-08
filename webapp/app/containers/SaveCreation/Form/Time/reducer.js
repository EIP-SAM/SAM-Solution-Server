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
} from './constants';

const initialState = {
  time: '',
  timeError: '',
};

function SaveCreationFormTimeReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_TIME:
      return Object.assign({}, initialState, {});
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
