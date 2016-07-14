//
// Save Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

const request = require('superagent');

import {
  GET_RESTORES,
  USER,
  LIST_FILES,
  LIST_SAVES,
} from './constants';

export function getRestores(restores) {
  return {
    type: GET_RESTORES,
    restores,
  };
}

export function nameUser(user){
  return {
    type: USER,
    user,
  };
}

export function listFiles(files) {
  return {
    type: LIST_FILES,
    files,
  };
}

export function listSaves(saves) {
  return {
    type: LIST_SAVES,
    saves,
  };
}

// export function createRestoresRequest(username) {
//   return function getCreateRestoresRequest(dispatch){
//   return request
//     .get('http://localhost:8080/historyRestore')
//     .set({ username })
//     .end((err, res) => {
//       dispatch(getRestores(res.body));
//     });
//   };
// }
