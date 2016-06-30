//
// Container page save
//

import { connect } from 'react-redux';
import { getRestoresRequest } from './actions';
import { Restore } from 'components/Restore';

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
)(Restore);
