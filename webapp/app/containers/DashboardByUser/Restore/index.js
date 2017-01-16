//
// Container dashboard by user page
//

import { connect } from 'react-redux';
import DashboardByUserRestore from 'components/DashboardByUser/Restore';
import { getHistoryRestoresByUserRequest } from 'containers/RestoreHistory/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHistoryRestoresByUserRequest: (username, limit) => dispatch(getHistoryRestoresByUserRequest(username, limit)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardByUserRestore);
