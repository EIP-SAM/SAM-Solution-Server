//
// Container page save
//

import { connect } from 'react-redux';
import { getSavesRequest } from './actions';
import { Save } from 'components/Save';

function mapStateToProps(state) {
  return {
    state: state.get('save'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSavesRequest: () => dispatch(getSavesRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Save);
