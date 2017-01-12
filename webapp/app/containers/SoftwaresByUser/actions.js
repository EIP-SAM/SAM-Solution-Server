//
// Sofwares by user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import socket from 'utils/socket-io';
import store from 'app';

import {
  SOFTWARES_BY_USER_GET_SOFTWARES,
  SOFTWARES_BY_USER_USERNAME,
  SOFTWARES_BY_USER_ADDITION_ALERT,
  SOFTWARES_BY_USER_UPDATE_ALERT,
  SOFTWARES_BY_USER_DELETION_ALERT,
  SOFTWARES_BY_USER_RESET_ALERT,
} from './constants';

export function resetAlert() {
  return {
    type: SOFTWARES_BY_USER_RESET_ALERT,
  };
}

export function additionAlert() {
  return {
    type: SOFTWARES_BY_USER_ADDITION_ALERT,
  };
}

export function updateAlert() {
  return {
    type: SOFTWARES_BY_USER_UPDATE_ALERT,
  };
}

export function deletionAlert() {
  return {
    type: SOFTWARES_BY_USER_DELETION_ALERT,
  };
}

export function getSoftwares(softwares) {
  return {
    type: SOFTWARES_BY_USER_GET_SOFTWARES,
    softwares,
  };
}

export function getUsername(username) {
  return {
    type: SOFTWARES_BY_USER_USERNAME,
    username,
  };
}

export function getInstalledSoftwaresRequest(username) {
  const data = {
    username,
  };
  socket.emit('webapp_all_software_by_user', data);
}

socket.on('server_all_software_by_user', (data) => {
  if (!data.error) {
    store.dispatch(getSoftwares(data));
  }
});

export function installSoftwares(username, softwares) {
  let packages = softwares;

  if (typeof softwares === 'string') {
    packages = [softwares];
  }

  const data = {
    username,
    package: packages,
  };
  socket.emit('webapp_install_software_by_user', data);
}

socket.on('server_install_software_by_user', (data) => {
  console.log('server_install_software_by_user');
  console.log(data);
});

export function updateSoftwares(username, softwares) {
  let packages = softwares;

  if (typeof softwares === 'string') {
    packages = [softwares];
  }

  const data = {
    username,
    package: packages,
  };
  socket.emit('webapp_update_software_by_user', data);
}

socket.on('server_update_software_by_user', (data) => {
  console.log('server_update_software_by_user');
  console.log(data);
});

export function deleteSoftwares(username, softwares) {
  let packages = softwares;

  if (typeof softwares === 'string') {
    packages = [softwares];
  }

  const data = {
    username,
    package: packages,
  };
  socket.emit('webapp_remove_software_by_user', data);
}

socket.on('server_remove_software_by_user', (data) => {
  console.log('server_remove_software_by_user');
  console.log(data);
});
