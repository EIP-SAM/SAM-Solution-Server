//
// Container email form create user
//

import { connect } from 'react-redux';
import { CreateUserFormEmail } from 'components/CreateUser/Form/Email';
import { emailChange } from './actions';

function mapStateToProps(state) {
  return {
    email: state.get('createUser').get('CreateUserFormEmailReducer').email,
    emailError: state.get('createUser').get('CreateUserFormEmailReducer').emailError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    emailChange: (email) => dispatch(emailChange(email)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUserFormEmail);
