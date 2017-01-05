//
// Container save & restore mode group rights edit group form
//

import { connect } from 'react-redux';
import { EditGroupFormGroupRightsSaveRestoreMode } from 'components/EditGroup/Form/GroupRights/SaveRestoreMode';
import { saveRestoreModeChange } from './actions';

function mapStateToProps(state) {
  return {
    saveRestoreMode: state.get('editGroup').get('EditGroupFormGroupRightsSaveRestoreModeReducer').saveRestoreMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveRestoreModeChange: saveRestoreMode => dispatch(saveRestoreModeChange(saveRestoreMode)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroupFormGroupRightsSaveRestoreMode);
