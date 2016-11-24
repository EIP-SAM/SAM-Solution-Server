//
// Persistence notifications actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  NOTIFICATIONS_PERSISTENCE_CHANGE,
  NOTIFICATIONS_RESET_STATE_PERSISTENCE,
} from './constants';

export function resetStatePersistence() {
  return {
    type: NOTIFICATIONS_RESET_STATE_PERSISTENCE,
  };
}

export function persistenceChange(persistence) {
  return {
    type: NOTIFICATIONS_PERSISTENCE_CHANGE,
    persistence,
  };
}
