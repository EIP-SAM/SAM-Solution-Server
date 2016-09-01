//
// Frequency form save creation reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  FREQUENCY_ERROR,
} from './constants';

const initialState = {
  frequencyError: '',
};

function SaveCreationFormFrequencyReducer(state = initialState, action) {
  switch (action.type) {
    case FREQUENCY_ERROR:
      return Object.assign({}, state, {
        frequencyError: action.frequencyError,
      });
    default:
      return state;
  }
}

export default SaveCreationFormFrequencyReducer;
