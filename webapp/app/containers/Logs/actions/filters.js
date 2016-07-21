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
  COLLAPSE_PANEL,
  INC_KEY_RERENDER,
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

export function collapsePanel(isCollapsed) {
  let info;

  if (!isCollapsed) {
    info = {
      isCollapsed: true,
      titleIcon: 'plus-sign',
      titleHelp: '(click to show)',
    };
  } else {
    info = {
      isCollapsed: false,
      titleIcon: 'minus-sign',
      titleHelp: '(click to hide)',
    };
  }

  return {
    type: COLLAPSE_PANEL,
    info,
  };
}

export function incKeyRerender() {
  return {
    type: INC_KEY_RERENDER,
  };
}
