//
// Searchbar sofwares by user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  SOFTWARES_BY_USER_SEARCHBAR_CHANGE,
} from './constants';

export function searchbarChange(searchbar) {
  return {
    type: SOFTWARES_BY_USER_SEARCHBAR_CHANGE,
    searchbar,
  };
}
