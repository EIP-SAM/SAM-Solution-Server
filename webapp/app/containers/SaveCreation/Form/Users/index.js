//
// Container page create SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreationUsersFormGroup } from 'components/SaveCreation/Form/UsersFormGroup';
import {
  listUsers,
} from './actions';

function mapStateToProps(state) {
  return {
    users: state.get('saveCreation').get('SaveCreationFormUsersReducer').users,
    listAllUsers: state.get('save').get('SaveReducer').users,
    userError: state.get('saveCreation').get('SaveCreationFormUsersReducer').userError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    listUsers: (users) => dispatch(listUsers(users)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveCreationUsersFormGroup);
