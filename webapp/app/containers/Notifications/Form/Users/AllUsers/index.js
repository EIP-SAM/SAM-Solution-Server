//
// Container all users form notifications
//

import { connect } from 'react-redux';
import NotificationsFormAllUsers from 'components/Notifications/Form/Users/AllUsers';
import { preSelectedUsersOnChange } from './actions';

function mapStateToProps(state) {
  return {
    users: state.get('notifications').get('NotificationsFormUsersReducer').get('NotificationsFormAllUsersReducer').users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    preSelectedUsersOnChange: preSelectedUsers => dispatch(preSelectedUsersOnChange(preSelectedUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormAllUsers);
