//
// Container selected users form notifications
//

import { connect } from 'react-redux';
import NotificationsFormSelectedUsers from 'components/Notifications/Form/Users/SelectedUsers';
import { unselectedUsersOnChange } from './actions';

function mapStateToProps(state) {
  return {
    selectedUsers: state.get('notifications').get('NotificationsFormReducer').get('NotificationsFormUsersReducer').get('NotificationsFormSelectedUsersReducer').selectedUsers,
    selectedUsersError: state.get('notifications').get('NotificationsFormReducer').get('NotificationsFormUsersReducer').get('NotificationsFormSelectedUsersReducer').selectedUsersError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    unselectedUsersOnChange: unselectedUsers => dispatch(unselectedUsersOnChange(unselectedUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormSelectedUsers);
