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

import request from 'utils/request';
import { browserHistory } from 'react-router';

import {
  SOFTWARES_BY_USER_GET_SOFTWARES,
  SOFTWARES_BY_USER_USERNAME,
  SOFTWARES_BY_USER_SOFT_NAME,
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

export function getSoftName(softName) {
  return {
    type: SOFTWARES_BY_USER_SOFT_NAME,
    softName,
  };
}

export function getInstalledSoftwaresRequest() {
  return function returnGetInstalledSoftwaresRequest(dispatch) {
    const softwares = [{
      name: 'tutu',
      version: '1.0.5',
    }, {
      name: 'test',
      version: '10.0.0',
    }];
    dispatch(getSoftwares(softwares));
  };
}
