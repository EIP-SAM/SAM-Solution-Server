//
// Container Login
//

import { connect } from 'react-redux';
import Login from 'components/Login';
import { resetStateForm } from './Form/actions';

function mapStateToProps(state) {
  return {
    wrongCredentials: state.get('login').get('LoginFormReducer').wrongCredentials,
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
)(Login);
