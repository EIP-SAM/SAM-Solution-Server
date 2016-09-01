//
// Time form Save Creation Actions
//

import {
  TIME_ERROR,
} from './constants';

export function timeErrorMsg(timeError) {
  return {
    type: TIME_ERROR,
    timeError,
  };
}
