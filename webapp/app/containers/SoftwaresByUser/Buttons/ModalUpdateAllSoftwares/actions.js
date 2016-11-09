//
// User software modal update all softwares by user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  SOFTWARES_BY_USER_SHOW_UPDATE_ALL_SOFTWARES_MODAL,
} from './constants';

export function showUpdateAllSoftwaresModal() {
  return {
    type: SOFTWARES_BY_USER_SHOW_UPDATE_ALL_SOFTWARES_MODAL,
    showModal: true,
  };
}

export function hideUpdateAllSoftwaresModal() {
  return {
    type: SOFTWARES_BY_USER_SHOW_UPDATE_ALL_SOFTWARES_MODAL,
    showModal: false,
  };
}
