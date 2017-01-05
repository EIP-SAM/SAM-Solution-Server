//
// Searchbar sofwares by user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import socket from 'utils/socket-io';
import { store } from 'app';
import { getSoftwares } from 'containers/SoftwaresByUser/actions';
import SOFTWARES_BY_USER_SEARCHBAR_CHANGE from './constants';

export function searchbarChange(searchbar) {
  return {
    type: SOFTWARES_BY_USER_SEARCHBAR_CHANGE,
    searchbar,
  };
}

export function searchSoftwareRequest(username, packageName) {
  const data = {
    username,
    package: packageName,
  };
  socket.emit('webapp_search_software_by_user', data);
}


socket.on('server_search_software_by_user', (data) => {
  if (!data.error) {
    store.dispatch(getSoftwares(data));
  }
});
