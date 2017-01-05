//
// Container all users form edit group
//

import { connect } from 'react-redux';
import EditGroupFormUsersAllUsers from 'components/EditGroup/Form/Users/AllUsers';
import { preSelectedUsersOnChange } from './actions';

function mapStateToProps(state) {
  return {
    users: state.get('editGroup').get('EditGroupFormUsersReducer').get('EditGroupFormUsersAllUsersReducer').users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    preSelectedUsersOnChange: preSelectedUsers => dispatch(preSelectedUsersOnChange(preSelectedUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroupFormUsersAllUsers);
