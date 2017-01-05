//
// Container page save
//

import { connect } from 'react-redux';
import Save from 'components/Save';
import { getSavesRequest } from './actions';

function mapStateToProps() {
  return {
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
