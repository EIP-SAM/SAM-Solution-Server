//
// Time form Save Creation Actions
//

import {
  RESET_STATE_TIME,
  TIME,
  TIME_ERROR,
  TIME_DISABLED,
} from './constants';

export function resetStateTime() {
  return {
    type: RESET_STATE_TIME,
  };
}

export function timeDisabled(isTimeDisabled) {
  return {
    type: TIME_DISABLED,
    isTimeDisabled,
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
