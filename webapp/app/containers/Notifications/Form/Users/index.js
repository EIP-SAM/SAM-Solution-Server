//
// Container users form notificaions
//

import { connect } from 'react-redux';
import { NotificationsFormUsers } from 'components/Notifications/Form/Users';
import getUsersRequest from './actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsersRequest: () => dispatch(getUsersRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormUsers);
