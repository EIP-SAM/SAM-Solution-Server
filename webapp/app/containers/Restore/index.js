//
// Container page restore
//

import { connect } from 'react-redux';
import { getRestoresRequest } from './actions';
import { Restore } from 'components/Restore';

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
