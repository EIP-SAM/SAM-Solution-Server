//
// Container groups form notifications
//

import { connect } from 'react-redux';
import NotificationsFormGroupsButtons from 'components/Notifications/Form/Groups/Buttons';
import {
  addGroups,
  removeGroupsSelected,
} from 'containers/Notifications/Form/Groups/SelectedGroups/actions';

import {
  getGroups,
  removeGroups,
} from 'containers/Notifications/Form/Groups/AllGroups/actions';

function mapStateToProps(state) {
  return {
    groups: state.get('notifications').get('NotificationsFormGroupsReducer').get('NotificationsFormAllGroupsReducer').groups,
    preSelectedGroups: state.get('notifications').get('NotificationsFormGroupsReducer').get('NotificationsFormAllGroupsReducer').preSelectedGroups,
    selectedGroups: state.get('notifications').get('NotificationsFormGroupsReducer').get('NotificationsFormSelectedGroupsReducer').selectedGroups,
    unselectedGroups: state.get('notifications').get('NotificationsFormGroupsReducer').get('NotificationsFormSelectedGroupsReducer').unselectedGroups,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addGroups: (selectedGroups) => dispatch(addGroups(selectedGroups)),
    removeGroups: (groups, preSelectedGroups) => dispatch(removeGroups(groups, preSelectedGroups)),
    getGroups: (groups) => dispatch(getGroups(groups)),
    removeGroupsSelected: (selectedGroups, unselectedGroups) => dispatch(removeGroupsSelected(selectedGroups, unselectedGroups)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormGroupsButtons);
