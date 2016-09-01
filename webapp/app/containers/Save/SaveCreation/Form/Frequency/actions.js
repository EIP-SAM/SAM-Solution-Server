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
  FREQUENCY_ERROR,
} from './constants';

export function frequencyErrorMsg(frequencyError) {
  return {
    type: FREQUENCY_ERROR,
    frequencyError,
  };
}
