import { connect } from 'react-redux';
import { forgottenPasswordRequest } from './actions';
import { onChangeData } from './actions';
import { Email } from 'components/ForgottenPassword/Form/Email';

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
)(Email);
