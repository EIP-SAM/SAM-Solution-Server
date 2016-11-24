//
// Persistance notifications actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  NOTIFICATIONS_PERSISTANCE_CHANGE,
  NOTIFICATIONS_RESET_STATE_PERSISTANCE,
} from './constants';

export function resetStatePersistance() {
  return {
    type: NOTIFICATIONS_RESET_STATE_PERSISTANCE,
  };
}

export function persistanceChange(persistance) {
  return {
    type: NOTIFICATIONS_PERSISTANCE_CHANGE,
    persistance,
  };
}
