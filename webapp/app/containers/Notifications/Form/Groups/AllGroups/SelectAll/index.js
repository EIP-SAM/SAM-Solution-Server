//
// Container select all groups form notifications
//

import { connect } from 'react-redux';
import NotificationsFormAllGroupsSelectAll from 'components/Notifications/Form/Groups/AllGroups/SelectAll';
import { removeGroups } from '../actions';
import { addGroups } from '../../SelectedGroups/actions';

function mapStateToProps(state) {
  return {
    groups: state.get('notifications').get('NotificationsFormGroupsReducer').get('NotificationsFormAllGroupsReducer').groups,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeGroups: (groups, preSelectedGroups) => dispatch(removeGroups(groups, preSelectedGroups)),
    addGroups: (groups) => dispatch(addGroups(groups)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormAllGroupsSelectAll);
