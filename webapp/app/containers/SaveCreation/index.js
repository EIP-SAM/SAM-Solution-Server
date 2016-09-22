//
// Container page SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreation } from 'components/SaveCreation';
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
)(SaveCreation);
