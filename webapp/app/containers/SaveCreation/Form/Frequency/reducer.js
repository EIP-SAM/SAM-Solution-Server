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
  SAVE_CREATION_RESET_STATE_FREQUENCY,
  SAVE_CREATION_FREQUENCY,
  SAVE_CREATION_FREQUENCY_ERROR,
  SAVE_CREATION_FREQUENCY_DISABLED,
} from './constants';

const initialState = {
  frequency: '',
  frequencyError: '',
  isFrequencyDisabled: false,
};

function SaveCreationFormFrequencyReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CREATION_RESET_STATE_FREQUENCY:
      return Object.assign({}, initialState, {});
    case SAVE_CREATION_FREQUENCY_DISABLED:
      return Object.assign({}, state, {
        isFrequencyDisabled: action.isFrequencyDisabled,
      });
    case SAVE_CREATION_FREQUENCY:
      return Object.assign({}, state, {
        frequency: action.frequency,
      });
    case SAVE_CREATION_FREQUENCY_ERROR:
      return Object.assign({}, state, {
        frequencyError: action.frequencyError,
      });
    default:
      return state;
  }
}

export default SaveCreationFormFrequencyReducer;
