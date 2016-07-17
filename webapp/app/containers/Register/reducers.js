//
// Register reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  REGISTER,
  SAVE_DATA,
} from './constants';

const initialState = {username: 'Username', email: 'Email', password: 'Password', confirmation: 'Password'};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
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

export default registerReducer;

/*    case GET_PROFILE:
      return Object.assign({}, state, {
        username: action.username,
        email: action.email,
        password: action.password,
        confirmation: action.confirmation,
      }); */