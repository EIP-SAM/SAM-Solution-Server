//
// Container ForgottenPassword
//

import { connect } from 'react-redux';
import { forgottenPasswordRequest } from './actions';
import { onChangeData } from './actions';
import { ForgottenPassword } from 'components/ForgottenPassword';

function mapStateToProps(state) {
  return {
    state: state.get('forgottenPassword'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeData: (email) => dispatch(onChangeData(email)),
    forgottenPasswordRequest: (email) => dispatch(forgottenPasswordRequest(email)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgottenPassword);
