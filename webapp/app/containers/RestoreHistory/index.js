//
// Container page save
//

import { connect } from 'react-redux';
import { getHistoryRestoresByUserRequest } from './actions';
import { RestoreHistory } from 'components/RestoreHistory';

function mapStateToProps(state) {
  return {
    state: state.get('restoreHistory'),
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