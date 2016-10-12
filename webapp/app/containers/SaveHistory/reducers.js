//
// Save History Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import SaveHistoryTableDeletionModalReducer from './Table/ModalDeletionScheduledSave/reducer';
import SaveHistoryTableInstantSaveModalReducer from './Table/ModalInstantSave/reducer';
import SaveHistoryTableInstantRestoreModalReducer from './Table/ModalInstantRestore/reducer';
import {
  SAVE_HISTORY_GET_HISTORY_SAVES_BY_USER,
} from './constants';

const initialState = {
  saves: [],
};

function SaveHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_HISTORY_GET_HISTORY_SAVES_BY_USER:
      return Object.assign({}, state, {
        saves: action.saves,
      });
    default:
      return state;
  }
}


export default combineReducers({
  SaveHistoryReducer,
  SaveHistoryTableDeletionModalReducer,
  SaveHistoryTableInstantSaveModalReducer,
  SaveHistoryTableInstantRestoreModalReducer,
});
