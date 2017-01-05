//
// Type user filter save actions
//

import SAVE_CURRENT_TYPE_USER from './constants';

export default function getCurrentTypeUser(currentTypeUser) {
  return {
    type: SAVE_CURRENT_TYPE_USER,
    currentTypeUser,
  };
}
