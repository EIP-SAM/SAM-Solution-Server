//
// Container edit group form buttons
//

import { connect } from 'react-redux';
import EditGroupFormButtons from 'components/EditGroup/Form/Buttons';
import { editGroupRequest } from 'containers/EditGroup/Form/actions';
import { groupNameErrorMsg } from 'containers/EditGroup/Form/GroupName/actions';

function mapStateToProps(state) {
  return {
    groupId: state.get('editGroup').get('EditGroupFormReducer').groupId,
    groupName: state.get('editGroup').get('EditGroupFormGroupNameReducer').groupName,
    saveRestoreMode: state.get('editGroup').get('EditGroupFormGroupRightsSaveRestoreModeReducer').saveRestoreMode,
    migrationMode: state.get('editGroup').get('EditGroupFormGroupRightsMigrationModeReducer').migrationMode,
    softwareMode: state.get('editGroup').get('EditGroupFormGroupRightsSoftwareModeReducer').softwareMode,
    selectedUsers: state.get('editGroup').get('EditGroupFormUsersReducer').get('EditGroupFormUsersSelectedUsersReducer').selectedUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editGroupRequest: (groupId, groupName, saveRestoreMode, migrationMode, softwareMode, selectedUsers) => dispatch(editGroupRequest(groupId, groupName, saveRestoreMode, migrationMode, softwareMode, selectedUsers)),
    groupNameErrorMsg: groupNameError => dispatch(groupNameErrorMsg(groupNameError)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroupFormButtons);
