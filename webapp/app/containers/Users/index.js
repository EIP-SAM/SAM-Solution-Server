//
// Container Users
//

import { connect } from 'react-redux';
import { Users } from 'components/Users';
import { getUsersRequest } from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('users').get('UsersDeletionModalReducer').username,
    alertMsg: state.get('users').get('UsersReducer').alertMsg,
    typeAlert: state.get('users').get('UsersReducer').typeAlert,
    displayAlert: state.get('users').get('UsersReducer').displayAlert,
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
)(Users);
