
//
// Container notifications form buttons
//

import { connect } from 'react-redux';
import NotificationsFormButtons from 'components/Notifications/Form/Buttons';
import { notificationRequest } from 'containers/Notifications/Form/actions';
import { titleErrorMsg } from 'containers/Notifications/Form/Title/actions';
import { descriptionErrorMsg } from 'containers/Notifications/Form/Description/actions';

function mapStateToProps(state) {
  return {
    title: state.get('notifications').get('NotificationsFormTitleReducer').title,
    description: state.get('notifications').get('NotificationsFormDescriptionReducer').description,
    selectedUsers: state.get('notifications').get('NotificationsFormUsersReducer').get('NotificationsFormSelectedUsersReducer').selectedUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    notificationRequest: (title, description, persistence, selectedUsers) => dispatch(notificationRequest(title, description, persistence, selectedUsers)),
    titleErrorMsg: titleError => dispatch(titleErrorMsg(titleError)),
    descriptionErrorMsg: descriptionError => dispatch(descriptionErrorMsg(descriptionError)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormButtons);
