//
// Container email form forgotten password
//

import { connect } from 'react-redux';
import { forgottenPasswordRequest, onChangeData } from './actions';
import { ForgottenPasswordEmail } from 'components/ForgottenPassword/Form/Email';

function mapStateToProps(state) {
  return {
    email: state.get('forgottenPassword').email,
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
)(ForgottenPasswordEmail);
