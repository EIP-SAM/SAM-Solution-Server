import { connect } from 'react-redux';
import { forgottenPasswordRequest } from 'containers/ForgottenPassword/Form/Email/actions';
import { ForgottenPasswordButtons } from 'components/ForgottenPassword/Form/Buttons';

function mapStateToProps(state) {
  return {
    email: state.get('forgottenPassword').email,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    forgottenPasswordRequest: (email) => dispatch(forgottenPasswordRequest(email)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgottenPasswordButtons);
