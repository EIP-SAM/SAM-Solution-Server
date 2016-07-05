//
// Container page logs
//

import { connect } from 'react-redux';
import { getFilteredLogs, clearLogs } from './actions';
import { Log } from 'components/Logs';

function mapStateToProps(state) {
  return {
    logs: state.get('logs'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFilteredLogs: (filter) => dispatch(getFilteredLogs(filter)),
    clearLogs: () => dispatch(clearLogs()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Log);
