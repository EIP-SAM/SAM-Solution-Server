//
// User software addition modal softwares by user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  SOFTWARES_BY_USER_SHOW_ADD_SOFTWARE_MODAL,
} from './constants';

export function showAddSoftwareModal() {
  return {
    type: SOFTWARES_BY_USER_SHOW_ADD_SOFTWARE_MODAL,
    showModal: true,
  };
}

export function hideAddSoftwareModal() {
  return {
    type: SOFTWARES_BY_USER_SHOW_ADD_SOFTWARE_MODAL,
    showModal: false,
  };
}
