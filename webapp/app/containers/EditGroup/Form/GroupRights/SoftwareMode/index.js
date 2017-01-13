//
// Container software mode group rights edit group form
//

import { connect } from 'react-redux';
import EditGroupFormGroupRightsSoftwareMode from 'components/EditGroup/Form/GroupRights/SoftwareMode';
import softwareModeChange from './actions';

function mapStateToProps(state) {
  return {
    softwareMode: state.get('editGroup').get('EditGroupFormGroupRightsSoftwareModeReducer').softwareMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    softwareModeChange: softwareMode => dispatch(softwareModeChange(softwareMode)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroupFormGroupRightsSoftwareMode);
