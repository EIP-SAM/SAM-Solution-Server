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
  SOFTWARES_BY_USER_ALERT,
  SOFTWARES_BY_USER_RESET_ALERT,
} from './constants';

export function resetAlert() {
  return {
    type: SOFTWARES_BY_USER_RESET_ALERT,
  };
}

export function createAlert(alert) {
  return {
    type: SOFTWARES_BY_USER_ALERT,
    alert,
  };
}

export function getSoftwares(softwares) {
  return {
    type: SOFTWARES_BY_USER_GET_SOFTWARES,
    softwares,
  };
}

export function resetSoftwares() {
  return {
    type: SOFTWARES_BY_USER_GET_SOFTWARES,
    softwares: [],
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
    store.dispatch(getSoftwares(data.result));
  } else {
    store.dispatch(createAlert({
      typeAlert: 'danger',
      alertMsg: data.error.err,
    }));
  }
});

export function installSoftwares(username, softwares) {
  const packages = [];

  if (typeof softwares === 'string') {
    packages.push(softwares);
  } else {
    softwares.forEach((soft) => {
      packages.push(soft.packageName);
    });
  }

  const data = {
    username,
    package: packages,
  };
  socket.emit('webapp_install_software_by_user', data);
}

socket.on('server_install_software_by_user', (data) => {
  if (!data.error) {
    data.result.forEach((soft) => {
      store.dispatch(createAlert({
        typeAlert: 'success',
        alertMsg: `${soft.packageName} has been installed`,
      }));
    });
  } else {
    data.result.forEach((soft) => {
      store.dispatch(createAlert({
        typeAlert: 'danger',
        alertMsg: `${soft.packageName} could not be install`,
      }));
    });
  }
});

export function updateSoftwares(username, softwares) {
  const packages = [];

  if (typeof softwares === 'string') {
    packages.push(softwares);
  } else {
    softwares.forEach((soft) => {
      packages.push(soft.packageName);
    });
  }

  const data = {
    username,
    package: packages,
  };
  socket.emit('webapp_update_software_by_user', data);
}

socket.on('server_update_software_by_user', (data) => {
  if (!data.error) {
    data.result.forEach((soft) => {
      store.dispatch(createAlert({
        typeAlert: 'success',
        alertMsg: `${soft.packageName} has been updated`,
      }));
    });
  } else {
    data.result.forEach((soft) => {
      store.dispatch(createAlert({
        typeAlert: 'danger',
        alertMsg: `${soft.packageName} could not be update`,
      }));
    });
  }
});

export function deleteSoftwares(username, softwares) {
  const packages = [];

  if (typeof softwares === 'string') {
    packages.push(softwares);
  } else {
    softwares.forEach((soft) => {
      packages.push(soft.packageName);
    });
  }

  const data = {
    username,
    package: packages,
  };
  socket.emit('webapp_remove_software_by_user', data);
}

socket.on('server_remove_software_by_user', (data) => {
  if (!data.error) {
    data.result.forEach((soft) => {
      store.dispatch(createAlert({
        typeAlert: 'success',
        alertMsg: `${soft.packageName} has been removed`,
      }));
    });
  } else {
    data.result.forEach((soft) => {
      store.dispatch(createAlert({
        typeAlert: 'danger',
        alertMsg: `${soft.packageName} could not be remove`,
      }));
    });
  }
});
