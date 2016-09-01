//
// Date form save creation reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  DATE_ERROR,
} from './constants';

const initialState = {
  dateError: '',
};

function SaveCreationFormDateReducer(state = initialState, action) {
  switch (action.type) {
    case DATE_ERROR:
      return Object.assign({}, state, {
        dateError: action.dateError,
      });
    default:
      return state;
  }
}

export default SaveCreationFormDateReducer;
