//
// Container select all users form notifications
//

import { connect } from 'react-redux';
import { NotificationsFormAllUsersSelectAll } from 'components/Notifications/Form/Users/AllUsers/SelectAll';
import { removeUsers } from '../actions';
import { addUsers } from '../../SelectedUsers/actions';

function mapStateToProps(state) {
  return {
    users: state.get('notifications').get('NotificationsFormUsersReducer').get('NotificationsFormAllUsersReducer').users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeUsers: (users, preSelectedUsers) => dispatch(removeUsers(users, preSelectedUsers)),
    addUsers: users => dispatch(addUsers(users)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormAllUsersSelectAll);
