//
// Container users form create group
//

import { connect } from 'react-redux';
import CreateGroupFormSelectedUsers from 'components/CreateGroup/Form/Users/SelectedUsers';
import { unselectedUsersOnChange } from './actions';

function mapStateToProps(state) {
  return {
    selectedUsers: state.get('createGroup').get('CreateGroupFormUsersReducer').get('CreateGroupFormUsersSelectedUsersReducer').selectedUsers,
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
)(CreateGroupFormSelectedUsers);
