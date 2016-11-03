//
// Sofwares by user table actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  SOFTWARES_BY_USER_SELECTED_SOFTWARES,
  SOFTWARES_BY_USER_ALL_CHECKED,
} from './constants';

export function getSelectedSoftware(selectedSoftwares) {
  return {
    type: SOFTWARES_BY_USER_SELECTED_SOFTWARES,
    selectedSoftwares,
  };
}

export function isAllCheckboxChecked(allChecked) {
  return {
    type: SOFTWARES_BY_USER_ALL_CHECKED,
    allChecked,
  };
}
