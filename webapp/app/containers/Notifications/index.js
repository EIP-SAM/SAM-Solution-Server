
//
// Container notifications
//

import { connect } from 'react-redux';
import Notifications from 'components/Notifications';
import { resetStateForm } from './Form/actions';
import { resetAlert } from './actions';

function mapStateToProps(state) {
  return {
    alertMsg: state.get('notifications').get('NotificationsReducer').alertMsg,
    typeAlert: state.get('notifications').get('NotificationsReducer').typeAlert,
    displayAlert: state.get('notifications').get('NotificationsReducer').displayAlert,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetStateForm: () => dispatch(resetStateForm()),
    resetAlert: () => dispatch(resetAlert()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifications);
