//
// Save Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  SET_FILTERS,
  RESET_FILTERS,
} from '../constants/filters';

export function setFilters(filters) {
  return {
    type: SET_FILTERS,
    filters,
  };
}

export function resetFilters() {
  return {
    type: RESET_FILTERS,
    filters: { findOpts: { force: true } },
  };
}
