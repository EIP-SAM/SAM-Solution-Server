//
// Frequency form save creation actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  SAVE_CREATION_RESET_STATE_FREQUENCY,
  SAVE_CREATION_FREQUENCY,
  SAVE_CREATION_FREQUENCY_ERROR,
  SAVE_CREATION_FREQUENCY_DISABLED,
} from './constants';

export function resetStateFrequency() {
  return {
    type: SAVE_CREATION_RESET_STATE_FREQUENCY,
  };
}

export function frequencyDisabled(isFrequencyDisabled) {
  return {
    type: SAVE_CREATION_FREQUENCY_DISABLED,
    isFrequencyDisabled,
  };
}

export function frequencySave(frequency) {
  return {
    type: SAVE_CREATION_FREQUENCY,
    frequency,
  };
}

export function frequencyErrorMsg(frequencyError) {
  return {
    type: SAVE_CREATION_FREQUENCY_ERROR,
    frequencyError,
  };
}
