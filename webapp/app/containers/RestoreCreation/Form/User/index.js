//
// Container users form page restore creation
//

import { connect } from 'react-redux';
import { RestoreCreationUser } from 'components/RestoreCreation/Form/User';

function mapStateToProps(state) {
  return {
    userInfo: state.get('app').userInfo,
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
