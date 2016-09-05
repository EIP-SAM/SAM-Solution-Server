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
  TIME_ERROR,
} from './constants';

const initialState = {
  timeError: '',
};

function SaveCreationFormTimeReducer(state = initialState, action) {
  switch (action.type) {
    case TIME_ERROR:
      return Object.assign({}, state, {
        timeError: action.timeError,
      });
    default:
      return state;
  }
}

export default SaveCreationFormTimeReducer;
