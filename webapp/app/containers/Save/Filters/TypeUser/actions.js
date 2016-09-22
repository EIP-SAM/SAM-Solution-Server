//
// Type user filter save actions
//

import {
  CURRENT_TYPE_USER,
} from './constants';

export function getCurrentTypeUser(currentTypeUser) {
  return {
    type: CURRENT_TYPE_USER,
    currentTypeUser,
  };
}
