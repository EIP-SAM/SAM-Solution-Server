//
// Container select all users form notifications
//

import { connect } from 'react-redux';
import { NotificationsFormAllUsersSelectAll } from 'components/Notifications/Form/Users/AllUsers';
import { deleteUsers } from '../actions';

function mapStateToProps(state) {
  return {
    users: state.get('notifications').get('NotificationsFormUsersReducer').get('NotificationsFormAllUsersReducer').users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUsers: (users, preSelectedUsers) => dispatch(deleteUsers(users, preSelectedUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormAllUsersSelectAll);
