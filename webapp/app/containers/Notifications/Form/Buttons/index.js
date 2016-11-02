
//
// Container create group form buttons
//

import { connect } from 'react-redux';
import { NotificationsFormButtons } from 'components/Notifications/Form/Buttons';
import { notificationsRequest } from 'containers/Notifications/Form/actions';

function mapStateToProps(state) {
  return {
    title: state.get('notifications').get('NotificationsFormTitleReducer').title,
    description: state.get('notifications').get('NotificationsFormDescriptionReducer').description,
    selectedUsers: state.get('notifications').get('NotificationsFormUsersReducer').get('NotificationsFormSelectedUsersReducer').selectedUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    notificationsRequest: (title, description, selectedUsers) => dispatch(notificationsRequest(title, description, selectedUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormButtons);
