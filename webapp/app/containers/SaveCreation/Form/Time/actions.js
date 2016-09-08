//
// Time form Save Creation Actions
//

import {
  RESET_STATE_TIME,
  TIME,
  TIME_ERROR,
} from './constants';

export function resetStateTime() {
  return {
    type: RESET_STATE_TIME,
  };
}

export function timeSave(time) {
  return {
    type: TIME,
    time,
  };
}

export function timeErrorMsg(timeError) {
  return {
    type: TIME_ERROR,
    timeError,
  };
}
