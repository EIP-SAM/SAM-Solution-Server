//
// Container users form edit group
//

import { connect } from 'react-redux';
import { EditGroupFormUsersButtons } from 'components/EditGroup/Form/Users/Buttons';
import {
  addUsersToGroup,
  removeUsersFromGroup,
} from 'containers/EditGroup/Form/Users/SelectedUsers/actions';

import {
  getUsers,
  removeUsers,
} from 'containers/EditGroup/Form/Users/AllUsers/actions';

function mapStateToProps(state) {
  return {
    users: state.get('editGroup').get('EditGroupFormUsersReducer').get('EditGroupFormUsersAllUsersReducer').users,
    preSelectedUsers: state.get('editGroup').get('EditGroupFormUsersReducer').get('EditGroupFormUsersAllUsersReducer').preSelectedUsers,
    selectedUsers: state.get('editGroup').get('EditGroupFormUsersReducer').get('EditGroupFormUsersSelectedUsersReducer').selectedUsers,
    unselectedUsers: state.get('editGroup').get('EditGroupFormUsersReducer').get('EditGroupFormUsersSelectedUsersReducer').unselectedUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUsersToGroup: (selectedUsers) => dispatch(addUsersToGroup(selectedUsers)),
    removeUsers: (users, preSelectedUsers) => dispatch(removeUsers(users, preSelectedUsers)),
    getUsers: (users) => dispatch(getUsers(users)),
    removeUsersFromGroup: (selectedUsers, unselectedUsers) => dispatch(removeUsersFromGroup(selectedUsers, unselectedUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroupFormUsersButtons);
