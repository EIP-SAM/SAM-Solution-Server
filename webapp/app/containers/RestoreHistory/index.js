//
// Container page restore history
//

import { connect } from 'react-redux';
import { getHistoryRestoresByUserRequest } from './actions';
import { RestoreHistory } from 'components/RestoreHistory';

function mapStateToProps(state) {
  return {
    userInfo: state.get('app').userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHistoryRestoresByUserRequest: (username) => dispatch(getHistoryRestoresByUserRequest(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreHistory);
