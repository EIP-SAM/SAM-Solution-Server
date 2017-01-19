//
// Searchbar sofwares by user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SOFTWARES_BY_USER_SEARCHBAR_CHANGE,
  SOFTWARES_BY_USER_SEARCHBAR_STATE,
} from './constants';

const initialState = {
  searchbar: '',
  searchstate: true,
};

function SoftwaresByUserSearchbarReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARES_BY_USER_SEARCHBAR_CHANGE:
      return Object.assign({}, state, {
        searchbar: action.searchbar,
      });
    case SOFTWARES_BY_USER_SEARCHBAR_STATE:
      return Object.assign({}, state, {
        searchstate: action.searchstate,
      });
    default:
      return state;
  }
}

export default SoftwaresByUserSearchbarReducer;
