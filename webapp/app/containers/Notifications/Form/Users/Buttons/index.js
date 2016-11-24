
//
// Container users form notifications
//

import { connect } from 'react-redux';
import { NotificationsFormUsersButtons } from 'components/Notifications/Form/Users/Buttons';
import {
  addUsers,
  removeUsersSelected,
} from 'containers/Notifications/Form/Users/SelectedUsers/actions';

import {
  getUsers,
  removeUsers,
} from 'containers/Notifications/Form/Users/AllUsers/actions';

function mapStateToProps(state) {
  return {
    users: state.get('notifications').get('NotificationsFormUsersReducer').get('NotificationsFormAllUsersReducer').users,
    preSelectedUsers: state.get('notifications').get('NotificationsFormUsersReducer').get('NotificationsFormAllUsersReducer').preSelectedUsers,
    selectedUsers: state.get('notifications').get('NotificationsFormUsersReducer').get('NotificationsFormSelectedUsersReducer').selectedUsers,
    unselectedUsers: state.get('notifications').get('NotificationsFormUsersReducer').get('NotificationsFormSelectedUsersReducer').unselectedUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUsers: (selectedUsers) => dispatch(addUsers(selectedUsers)),
    removeUsers: (users, preSelectedUsers) => dispatch(removeUsers(users, preSelectedUsers)),
    getUsers: (users) => dispatch(getUsers(users)),
    removeUsersSelected: (selectedUsers, unselectedUsers) => dispatch(removeUsersSelected(selectedUsers, unselectedUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormUsersButtons);
