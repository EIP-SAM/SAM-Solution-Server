//
// Container dashboard by user page
//

import { connect } from 'react-redux';
import DashboardByUserLogs from 'components/DashboardByUser/Logs';
import { getFilteredLogs } from 'containers/Logs/actions/result';

function mapStateToProps(state) {
  return {
    logs: state.get('logs').get('result').get('logs').logs.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFilteredLogs: filters => dispatch(getFilteredLogs(filters)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardByUserLogs);
