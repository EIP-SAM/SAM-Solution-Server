//
// Title notifications actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  NOTIFICATIONS_TITLE_CHANGE,
  NOTIFICATIONS_RESET_STATE_TITLE,
} from './constants';

export function resetStateTitle() {
  return {
    type: NOTIFICATIONS_RESET_STATE_TITLE,
  };
}

export function titleChange(title) {
  return {
    type: NOTIFICATIONS_TITLE_CHANGE,
    title,
  };
}
