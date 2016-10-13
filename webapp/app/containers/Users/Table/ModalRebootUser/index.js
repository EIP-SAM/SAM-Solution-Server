//
// Container modal reboot user Users
//

import { connect } from 'react-redux';
import { UserRebootModal } from 'components/Users/Table/ModalRebootUser';
import {
  hideInstantRebootModal,
  rebootUser,
} from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('users').get('UsersReducer').username,
    showModal: state.get('users').get('UsersRebootModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    rebootUser: (username) => dispatch(rebootUser(username)),
    hideInstantRebootModal: () => dispatch(hideInstantRebootModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserRebootModal);
