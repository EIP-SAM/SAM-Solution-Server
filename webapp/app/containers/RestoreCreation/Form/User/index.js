//
// Container users form page restore creation
//

import { connect } from 'react-redux';
import RestoreCreationUser from 'components/RestoreCreation/Form/User';

function mapStateToProps(state) {
  return {
    userIsAdmin: state.get('app').userInfo.isAdmin,
    username: state.get('restoreCreation').get('UsersRestoreCreationReducer').username,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreCreationUser);
