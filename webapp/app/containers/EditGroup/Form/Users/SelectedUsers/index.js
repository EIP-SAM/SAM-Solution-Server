//
// Container users form edit group
//

import { connect } from 'react-redux';
import { EditGroupFormSelectedUsers } from 'components/EditGroup/Form/Users/SelectedUsers';
import { unselectedUsersOnChange } from './actions';

function mapStateToProps(state) {
  return {
    selectedUsers: state.get('editGroup').get('EditGroupFormUsersReducer').get('EditGroupFormUsersSelectedUsersReducer').selectedUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    unselectedUsersOnChange: unselectedUsers => dispatch(unselectedUsersOnChange(unselectedUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroupFormSelectedUsers);
