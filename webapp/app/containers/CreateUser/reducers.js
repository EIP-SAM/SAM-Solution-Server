//
// CreateUser reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  CREATE_USER,
  SAVE_DATA,
} from './constants';

const initialState = {username: 'Username', email: 'Email', password: 'Password', confirmation: 'Password'};

function createUserReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return Object.assign({}, state, {});
    case SAVE_DATA:
      return Object.assign({}, state, {
        username: action.username,
        email: action.email,
        password: action.password,
        confirmation: action.confirmation,
      });
    default:
      return state;
  }
}

export default createUserReducer;
