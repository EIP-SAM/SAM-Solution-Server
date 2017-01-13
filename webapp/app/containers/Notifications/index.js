
//
// Container notifications
//

import { connect } from 'react-redux';
import Notifications from 'components/Notifications';
import { resetStateForm } from './Form/actions';

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
)(Notifications);
