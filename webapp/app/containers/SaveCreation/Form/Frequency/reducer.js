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
  RESET_STATE_FREQUENCY,
  FREQUENCY,
  FREQUENCY_ERROR,
  FREQUENCY_DISABLED,
} from './constants';

const initialState = {
  frequency: '',
  frequencyError: '',
  isFrequencyDisabled: false,
};

function SaveCreationFormFrequencyReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_FREQUENCY:
      return Object.assign({}, initialState, {});
    case FREQUENCY_DISABLED:
      return Object.assign({}, state, {
        isFrequencyDisabled: action.isFrequencyDisabled,
      });
    case FREQUENCY:
      return Object.assign({}, state, {
        frequency: action.frequency,
      });
    case FREQUENCY_ERROR:
      return Object.assign({}, state, {
        frequencyError: action.frequencyError,
      });
    default:
      return state;
  }
}

export default SaveCreationFormFrequencyReducer;
