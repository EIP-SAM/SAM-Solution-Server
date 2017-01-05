//
// Type user filter users actions
//

import USERS_CURRENT_TYPE_USER from './constants';

export default function getCurrentTypeUser(currentTypeUser) {
  return {
    type: USERS_CURRENT_TYPE_USER,
    currentTypeUser,
  };
}
