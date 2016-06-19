//
// Container page logs
//

import { connect } from 'react-redux';
import { getAllLogsRequest } from './actions';
import { Log } from 'components/Logs';

function mapStateToProps(state) {
  return {
    logs: state.get('logs'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllLogsRequest: () => dispatch(getAllLogsRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Log);
