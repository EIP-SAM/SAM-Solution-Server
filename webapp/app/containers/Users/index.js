//
// Container Users
//

import { connect } from 'react-redux';
import { Users } from 'components/Users';
import {
  getUsersRequest,
  resetAlert,
} from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('users').get('UsersReducer').username,
    alertMsg: state.get('users').get('UsersReducer').alertMsg,
    typeAlert: state.get('users').get('UsersReducer').typeAlert,
    displayAlert: state.get('users').get('UsersReducer').displayAlert,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsersRequest: () => dispatch(getUsersRequest()),
    resetAlert: () => dispatch(resetAlert()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
