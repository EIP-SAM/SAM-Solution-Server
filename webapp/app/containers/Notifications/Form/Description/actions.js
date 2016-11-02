//
// Description notifications actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  NOTIFICATIONS_DESCRIPTION_CHANGE,
  NOTIFICATIONS_RESET_STATE_DESCRIPTION,
} from './constants';

export function resetStateDescription() {
  return {
    type: NOTIFICATIONS_RESET_STATE_DESCRIPTION,
  };
}

export function descriptionChange(description) {
  return {
    type: NOTIFICATIONS_DESCRIPTION_CHANGE,
    description,
  };
}
