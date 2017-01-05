//
// Container email form edit user
//

import { connect } from 'react-redux';
import EditUserFormEmail from 'components/EditUser/Form/Email';
import { emailChange } from './actions';

function mapStateToProps(state) {
  return {
    email: state.get('editUser').get('EditUserFormEmailReducer').email,
    emailError: state.get('editUser').get('EditUserFormEmailReducer').emailError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    emailChange: email => dispatch(emailChange(email)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserFormEmail);
