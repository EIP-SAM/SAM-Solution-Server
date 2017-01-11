//
// Container page restore history
//

import { connect } from 'react-redux';
import RestoreHistory from 'components/RestoreHistory';
import { getHistoryRestoresByUserRequest } from './actions';

function mapStateToProps(state) {
  return {
    userIsAdmin: state.get('app').userInfo.isAdmin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHistoryRestoresByUserRequest: username => dispatch(getHistoryRestoresByUserRequest(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreHistory);
