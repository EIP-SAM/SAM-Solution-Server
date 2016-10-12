//
// Container save & restore mode group rights create group form
//

import { connect } from 'react-redux';
import { CreateGroupFormGroupRightsSaveRestoreMode } from 'components/CreateGroup/Form/GroupRights/SaveRestoreMode';
import { saveRestoreModeChange } from './actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveRestoreModeChange: (saveRestoreMode) => dispatch(saveRestoreModeChange(saveRestoreMode)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGroupFormGroupRightsSaveRestoreMode);
