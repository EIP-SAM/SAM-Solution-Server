//
// Container all users form create group
//

import { connect } from 'react-redux';
import { CreateGroupFormUsersAllUsers } from 'components/CreateGroup/Form/Users/AllUsers';
import {
  getUsersRequest,
  preSelectedUsersOnChange,
} from './actions';

function mapStateToProps(state) {
  return {
    users: state.get('createGroup').get('CreateGroupFormUsersReducer').get('CreateGroupFormUsersAllUsersReducer').users,
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
)(CreateGroupFormUsersAllUsers);
