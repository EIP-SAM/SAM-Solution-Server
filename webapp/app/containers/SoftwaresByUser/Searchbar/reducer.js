//
// Searchbar sofwares by user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import SOFTWARES_BY_USER_SEARCHBAR_CHANGE from './constants';

const initialState = {
  searchbar: '',
};

function SoftwaresByUserSearchbarReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARES_BY_USER_SEARCHBAR_CHANGE:
      return Object.assign({}, state, {
        searchbar: action.searchbar,
      });
    default:
      return state;
  }
}

export default SoftwaresByUserSearchbarReducer;
