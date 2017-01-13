
//
// Container notifications form buttons
//

import { connect } from 'react-redux';
import NotificationsFormButtons from 'components/Notifications/Form/Buttons';
import { notificationRequest } from 'containers/Notifications/Form/actions';
import { titleErrorMsg } from 'containers/Notifications/Form/Title/actions';
import { descriptionErrorMsg } from 'containers/Notifications/Form/Description/actions';
import { selectedUsersErrorMsg } from 'containers/Notifications/Form/Users/SelectedUsers/actions';
<<<<<<< HEAD

=======
>>>>>>> 4ca1ba85acd5f33abd04add0824831aaa8aef649

function mapStateToProps(state) {
  return {
    title: state.get('notifications').get('NotificationsFormTitleReducer').title,
    description: state.get('notifications').get('NotificationsFormDescriptionReducer').description,
    persistence: state.get('notifications').get('NotificationsFormPersistenceReducer').persistence,
    selectedUsers: state.get('notifications').get('NotificationsFormUsersReducer').get('NotificationsFormSelectedUsersReducer').selectedUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    notificationRequest: (title, description, persistence, selectedUsers) => dispatch(notificationRequest(title, description, persistence, selectedUsers)),
<<<<<<< HEAD
    titleErrorMsg: (titleError) => dispatch(titleErrorMsg(titleError)),
    descriptionErrorMsg: (descriptionError) => dispatch(descriptionErrorMsg(descriptionError)),
    selectedUsersErrorMsg: (selectedUsersError) => dispatch(selectedUsersErrorMsg(selectedUsersError)),
=======
    titleErrorMsg: titleError => dispatch(titleErrorMsg(titleError)),
    descriptionErrorMsg: descriptionError => dispatch(descriptionErrorMsg(descriptionError)),
    selectedUsersErrorMsg: selectedUsersError => dispatch(selectedUsersErrorMsg(selectedUsersError)),
>>>>>>> 4ca1ba85acd5f33abd04add0824831aaa8aef649
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormButtons);
