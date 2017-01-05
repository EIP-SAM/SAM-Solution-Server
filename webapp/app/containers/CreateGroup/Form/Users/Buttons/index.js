//
// Container users form create group
//

import { connect } from 'react-redux';
import { CreateGroupFormUsersButtons } from 'components/CreateGroup/Form/Users/Buttons';
import {
  addUsersToGroup,
  removeUsersFromGroup,
} from 'containers/CreateGroup/Form/Users/SelectedUsers/actions';

import {
  getUsers,
  removeUsers,
} from 'containers/CreateGroup/Form/Users/AllUsers/actions';

function mapStateToProps(state) {
  return {
    users: state.get('createGroup').get('CreateGroupFormUsersReducer').get('CreateGroupFormUsersAllUsersReducer').users,
    preSelectedUsers: state.get('createGroup').get('CreateGroupFormUsersReducer').get('CreateGroupFormUsersAllUsersReducer').preSelectedUsers,
    selectedUsers: state.get('createGroup').get('CreateGroupFormUsersReducer').get('CreateGroupFormUsersSelectedUsersReducer').selectedUsers,
    unselectedUsers: state.get('createGroup').get('CreateGroupFormUsersReducer').get('CreateGroupFormUsersSelectedUsersReducer').unselectedUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUsersToGroup: selectedUsers => dispatch(addUsersToGroup(selectedUsers)),
    removeUsers: (users, preSelectedUsers) => dispatch(removeUsers(users, preSelectedUsers)),
    getUsers: users => dispatch(getUsers(users)),
    removeUsersFromGroup: (selectedUsers, unselectedUsers) => dispatch(removeUsersFromGroup(selectedUsers, unselectedUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGroupFormUsersButtons);
