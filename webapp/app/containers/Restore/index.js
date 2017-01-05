//
// Container page restore
//

import { connect } from 'react-redux';
import Restore from 'components/Restore';
import { getRestoresRequest } from './actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRestoresRequest: () => dispatch(getRestoresRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Restore);
