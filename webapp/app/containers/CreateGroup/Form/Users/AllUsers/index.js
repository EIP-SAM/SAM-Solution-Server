//
// Container users form create group
//

import { connect } from 'react-redux';
import { getUsersRequest } from './actions';
import { CreateGroupFormUsersAllUsers } from 'components/CreateGroup/Form/Users/AllUsers';

function mapStateToProps(state) {
  return {
    users: state.get('createGroup').get('CreateGroupFormUsersReducer').get('CreateGroupFormUsersAllUsersReducer').users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsersRequest: () => dispatch(getUsersRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGroupFormUsersAllUsers);
