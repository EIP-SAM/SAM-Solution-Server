//
// User deletion modal Users reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SOFTWARES_BY_USER_SELECTED_SOFTWARES,
  SOFTWARES_BY_USER_ALL_CHECKED,
} from './constants';

const initialState = {
  selectedSoftwares: [],
  allChecked: false,
};

function SoftwaresByUserTableReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARES_BY_USER_SELECTED_SOFTWARES:
      return Object.assign({}, state, {
        selectedSoftwares: action.selectedSoftwares,
      });
    case SOFTWARES_BY_USER_ALL_CHECKED:
      return Object.assign({}, state, {
        allChecked: action.allChecked,
      });
    default:
      return state;
  }
}

export default SoftwaresByUserTableReducer;
