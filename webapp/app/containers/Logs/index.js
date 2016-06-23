//
// Container page logs
//

import { connect } from 'react-redux';
import { getAllLogsRequest, getLimitLogsRequest, clearLogs } from './actions';
import { Log } from 'components/Logs';

function mapStateToProps(state) {
  return {
    logs: state.get('logs'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllLogsRequest: () => dispatch(getAllLogsRequest()),
    getLimitLogsRequest: () => dispatch(getLimitLogsRequest()),
    clearLogs: () => dispatch(clearLogs()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Log);
