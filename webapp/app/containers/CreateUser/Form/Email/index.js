//
// Container email form create user
//

import { connect } from 'react-redux';
import { CreateUserFormEmailFormGroup } from 'components/CreateUser/Form/EmailFormGroup';
import { emailChange } from './actions';

function mapStateToProps(state) {
  return {
    email: state.get('createUser').get('CreateUserFormEmailReducer').email,
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
)(CreateUserFormEmailFormGroup);
