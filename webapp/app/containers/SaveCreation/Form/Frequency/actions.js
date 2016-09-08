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
  RESET_STATE_FREQUENCY,
  FREQUENCY,
  FREQUENCY_ERROR,
} from './constants';

export function resetStateFrequency() {
  return {
    type: RESET_STATE_FREQUENCY,
  };
}

export function frequencySave(frequency) {
  return {
    type: FREQUENCY,
    frequency,
  };
}

export function frequencyErrorMsg(frequencyError) {
  return {
    type: FREQUENCY_ERROR,
    frequencyError,
  };
}
