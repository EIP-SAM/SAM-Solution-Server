//
// Save Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//
import { combineReducers } from 'redux-immutable';
import InstantRestoreModalRestoreReducer from './Table/ModalInstantRestore/reducer';
import RestoreFiltersReducer from './Filters/reducers';

import {
  GET_RESTORES,
} from './constants';

const initialState = {
  restores: [],
};

function RestoreReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESTORES:
      return Object.assign({}, state, {
        restores: action.restores,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of save page
//
export default combineReducers({
  RestoreReducer,
  RestoreFiltersReducer,
  InstantRestoreModalRestoreReducer,
});
