//
// Container users form page restore creation
//

import { connect } from 'react-redux';
import { RestoreCreationUserFormGroup } from 'components/RestoreCreation/Form/UsersFormGroup';

function mapStateToProps(state) {
  return {
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
)(RestoreCreationUserFormGroup);
