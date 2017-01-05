//
// Type user filter restore actions
//

import RESTORE_CURRENT_TYPE_USER from './constants';

export default function getCurrentTypeUser(currentTypeUser) {
  return {
    type: RESTORE_CURRENT_TYPE_USER,
    currentTypeUser,
  };
}
