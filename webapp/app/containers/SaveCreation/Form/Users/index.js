//
// Container page create SaveCreation
//

import { connect } from 'react-redux';
import SaveCreationUsers from 'components/SaveCreation/Form/Users';
import {
  listUsers,
} from './actions';

function mapStateToProps(state) {
  return {
    userIsAdmin: state.get('app').userInfo.isAdmin,
    users: state.get('saveCreation').get('SaveCreationFormUsersReducer').users,
    userError: state.get('saveCreation').get('SaveCreationFormUsersReducer').userError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    listUsers: users => dispatch(listUsers(users)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveCreationUsers);
