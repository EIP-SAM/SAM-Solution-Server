//
// Time form Save Creation Actions
//

import {
  SAVE_CREATION_RESET_STATE_TIME,
  SAVE_CREATION_TIME,
  SAVE_CREATION_TIME_ERROR,
  SAVE_CREATION_TIME_DISABLED,
} from './constants';

export function resetStateTime() {
  return {
    type: SAVE_CREATION_RESET_STATE_TIME,
  };
}

export function timeDisabled(isTimeDisabled) {
  return {
    type: SAVE_CREATION_TIME_DISABLED,
    isTimeDisabled,
  };
}

export function timeSave(time) {
  return {
    type: SAVE_CREATION_TIME,
    time,
  };
}

export function timeErrorMsg(timeError) {
  return {
    type: SAVE_CREATION_TIME_ERROR,
    timeError,
  };
}
