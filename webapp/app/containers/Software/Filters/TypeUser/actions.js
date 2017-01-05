//
// Type user filter software actions
//

import SOFTWARE_CURRENT_TYPE_USER from './constants';

export default function getCurrentTypeUser(currentTypeUser) {
  return {
    type: SOFTWARE_CURRENT_TYPE_USER,
    currentTypeUser,
  };
}
