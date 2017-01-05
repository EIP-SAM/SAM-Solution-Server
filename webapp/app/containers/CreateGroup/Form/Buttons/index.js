//
// Container create group form buttons
//

import { connect } from 'react-redux';
import CreateGroupFormButtons from 'components/CreateGroup/Form/Buttons';
import { createGroupRequest } from 'containers/CreateGroup/Form/actions';
import { groupNameErrorMsg } from 'containers/CreateGroup/Form/GroupName/actions';

function mapStateToProps(state) {
  return {
    groupName: state.get('createGroup').get('CreateGroupFormGroupNameReducer').groupName,
    saveRestoreMode: state.get('createGroup').get('CreateGroupFormGroupRightsSaveRestoreModeReducer').saveRestoreMode,
    migrationMode: state.get('createGroup').get('CreateGroupFormGroupRightsMigrationReducer').migrationMode,
    softwareMode: state.get('createGroup').get('CreateGroupFormGroupRightsSoftwareModeReducer').softwareMode,
    selectedUsers: state.get('createGroup').get('CreateGroupFormUsersReducer').get('CreateGroupFormUsersSelectedUsersReducer').selectedUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createGroupRequest: (groupName, saveRestoreMode, migrationMode, softwareMode, users) => dispatch(createGroupRequest(groupName, saveRestoreMode, migrationMode, softwareMode, users)),
    groupNameErrorMsg: groupNameError => dispatch(groupNameErrorMsg(groupNameError)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGroupFormButtons);
