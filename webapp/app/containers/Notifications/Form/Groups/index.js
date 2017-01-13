//
// Container groups form notificaions
//

import { connect } from 'react-redux';
import NotificationsFormGroups from 'components/Notifications/Form/Groups';
import getGroupsRequest from './actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroupsRequest: () => dispatch(getGroupsRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormGroups);
