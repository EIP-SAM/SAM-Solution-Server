//
// Container page logs
//

import { connect } from 'react-redux';
import { getAllLogsRequest } from './actions';
import { LogResult } from '../../components/Logs';

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
)(LogResult);
