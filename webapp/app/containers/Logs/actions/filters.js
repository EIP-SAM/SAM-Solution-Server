//
// Logs Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  LOGS_SET_FILTERS,
  LOGS_RESET_FILTERS,
  LOGS_RESET_PANEL,
  LOGS_COLLAPSE_PANEL,
  LOGS_INC_KEY_RERENDER,
} from '../constants/filters';

export function setFilters(filters) {
  return {
    type: LOGS_SET_FILTERS,
    filters,
  };
}

export function resetFilters() {
  return {
    type: LOGS_RESET_FILTERS,
    filters: { findOpts: { force: true } },
  };
}

export function resetPanel() {
  return {
    type: LOGS_RESET_PANEL,
    info: {
      isCollapsed: true,
      titleIcon: 'plus-sign',
      titleHelp: '(click to show)',
    },
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
    type: LOGS_COLLAPSE_PANEL,
    info,
  };
}

export function incKeyRerender() {
  return {
    type: LOGS_INC_KEY_RERENDER,
  };
}
