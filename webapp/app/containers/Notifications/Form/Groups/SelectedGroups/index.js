//
// Container selected groups form notifications
//

import { connect } from 'react-redux';
import NotificationsFormSelectedGroups from 'components/Notifications/Form/Groups/SelectedGroups';
import { unselectedGroupsOnChange } from './actions';

function mapStateToProps(state) {
  return {
    selectedGroups: state.get('notifications').get('NotificationsFormReducer').get('NotificationsFormGroupsReducer').get('NotificationsFormSelectedGroupsReducer').selectedGroups,
    selectedGroupsError: state.get('notifications').get('NotificationsFormReducer').get('NotificationsFormGroupsReducer').get('NotificationsFormSelectedGroupsReducer').selectedGroupsError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    unselectedGroupsOnChange: unselectedGroups => dispatch(unselectedGroupsOnChange(unselectedGroups)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormSelectedGroups);
