//
// Container page restoreCreation
//

import { connect } from 'react-redux';
import { getRestoresRequest } from './actions';
import { RestoreCreation } from 'components/RestoreCreation';

function mapStateToProps(state) {
  return {
    state: state.get('restore'),
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
)(RestoreCreation);
