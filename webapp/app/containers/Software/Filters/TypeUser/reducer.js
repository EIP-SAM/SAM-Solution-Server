//
// Type user filter software page
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import SOFTWARE_CURRENT_TYPE_USER from './constants';

const initialState = {
  currentTypeUser: 'All',
};

function SoftwareTypeUserFilterReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARE_CURRENT_TYPE_USER:
      return Object.assign({}, state, {
        currentTypeUser: action.currentTypeUser,
      });
    default:
      return state;
  }
}

export default SoftwareTypeUserFilterReducer;
