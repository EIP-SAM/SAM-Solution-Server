//
// Container for logs result
//

import { connect } from 'react-redux';
import LogResult from 'components/Logs/Results';
import { setSorts } from './actions/result';

function getDefaultRequestStatus(state) {
  return state.get('logs').get('result').get('request') || false;
}

function getDefaultLogs(state) {
  return state.get('logs').get('result').get('logs').logs ||
    {
      error: false,
      data: [],
    };
}

function getDefaultSorts(state) {
  return state.get('logs').get('result').get('sorts') || 'none';
}

function mapStateToProps(state) {
  return {
    logs: getDefaultLogs(state),
    sorts: getDefaultSorts(state),
    isLoading: getDefaultRequestStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSorts: sorts => dispatch(setSorts(sorts)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogResult);
