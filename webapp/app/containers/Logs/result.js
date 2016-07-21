//
// Container for logs result
//

import { connect } from 'react-redux';
import LogResult from 'components/Logs/Results';
import styleSort from './styleSort.json';

function getDefaultLogs(state) {
  return state.get('logs').get('result').get('logs').logs ||
    {
      error: false,
      data: [],
    };
}

function getDefaultSorts(state) {
  return state.get('logs').get('result').get('sorts').sorts ||
    {
      dateStatus: styleSort.desc,
      levelStatus: styleSort.asc,
      loggerStatus: styleSort.desc,
      messageStatus: styleSort.desc,
    };
}

function mapStateToProps(state) {
  return {
    logs: getDefaultLogs(state),
    sorts: getDefaultSorts(state),
  };
}

export default connect(
  mapStateToProps,
  null,
)(LogResult);
