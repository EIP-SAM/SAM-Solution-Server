//
// Container all groups form notifications
//

import { connect } from 'react-redux';
import NotificationsFormAllGroups from 'components/Notifications/Form/Groups/AllGroups';
import { preSelectedGroupsOnChange } from './actions';

function mapStateToProps(state) {
  return {
    groups: state.get('notifications').get('NotificationsFormReducer').get('NotificationsFormGroupsReducer').get('NotificationsFormAllGroupsReducer').groups,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    preSelectedGroupsOnChange: (preSelectedGroups) => dispatch(preSelectedGroupsOnChange(preSelectedGroups)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormAllGroups);
