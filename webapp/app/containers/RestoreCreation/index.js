//
// Container page restore Creation
//

import { connect } from 'react-redux';
import { RestoreCreation } from 'components/RestoreCreation';
import { resetStateForm } from './Form/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetStateForm: () => dispatch(resetStateForm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreCreation);
