//
// Container Login
//

import { connect } from 'react-redux';
import { registerRequest } from './actions';
import { onChangeData } from './actions';
import { Register } from 'components/Register';

function mapStateToProps(state) {
  return {
    state: state.get('register'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeData: (username, email, password, confirmation) => dispatch(onChangeData(username, email, password, confirmation)),
    registerRequest: (username, email, password, confirmation) => dispatch(registerRequest(username, email, password, confirmation)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
