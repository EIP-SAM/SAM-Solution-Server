//
// Container for logs result
//

import { connect } from 'react-redux';
import LogResult from 'components/Logs/Results';

function mapStateToProps(state) {
  return {
    logs: state.get('logs').get('result').logs,
  };
}

export default connect(
  mapStateToProps,
  null,
)(LogResult);
