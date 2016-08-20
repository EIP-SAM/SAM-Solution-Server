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
import SaveTableReducer from './Table/reducer';
import {
  GET_SAVES,
  GET_USERS,
} from './constants';

const initialState = {
  saves: [],
  users: [],
};

function SaveReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SAVES:
      return Object.assign({}, state, {
        saves: action.saves,
      });
    case GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    default:
      return state;
  }
}

export default combineReducers({
  SaveReducer,
  SaveTableReducer,
});
