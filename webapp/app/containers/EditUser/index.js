//
// Container EditUser
//

import { connect } from 'react-redux';
import { EditUser } from 'components/EditUser';
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
)(EditUser);
