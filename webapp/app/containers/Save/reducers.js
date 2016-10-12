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
import SaveTableInstantSaveModalReducer from './Table/ModalInstantSave/reducer';
import SaveTableInstantRestoreModalReducer from './Table/ModalInstantRestore/reducer';
import SaveFiltersReducer from './Filters/reducers';

import {
  SAVE_GET_SAVES,
} from './constants';

const initialState = {
  saves: [],
};

function SaveReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_GET_SAVES:
      return Object.assign({}, state, {
        saves: action.saves,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of save page
//
export default combineReducers({
  SaveReducer,
  SaveTableInstantSaveModalReducer,
  SaveTableInstantRestoreModalReducer,
  SaveFiltersReducer,
});
