//
// Container notifications
//

import { connect } from 'react-redux';
import { NotificationsGroups } from 'components/NotificationsGroups';
import { resetStateForm } from '../Notifications/Form/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetStateForm: () => dispatch(resetStateForm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsGroups);
