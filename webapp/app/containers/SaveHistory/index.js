//
// Container page history save by user
//

import { connect } from 'react-redux';
import { SaveHistory } from 'components/SaveHistory';

function mapStateToProps(state) {
  return {
    state: state.get('saveHistory'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHistory);
