//
// Notifications actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  NOTIFICATIONS_ALERT,
  NOTIFICATIONS_RESET_ALERT,
} from './constants';

export function resetAlert() {
  return {
    type: NOTIFICATIONS_RESET_ALERT,
  };
}

export function addAlert() {
  return {
    type: NOTIFICATIONS_ALERT,
  };
}
