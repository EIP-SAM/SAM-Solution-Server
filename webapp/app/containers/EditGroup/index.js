//
// Container EditGroup
//

import { connect } from 'react-redux';
import { editGroupRequest } from './actions';
import { getGroupRequest } from './actions';
import { onChangeData } from './actions';
import { EditGroup } from 'components/EditGroup';

function mapStateToProps(state) {
  return {
    state: state.get('editGroup'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeData: (groupname, saveAndRestoreMode, migrationMode, softwarePackages) => dispatch(onChangeData(groupname, saveAndRestoreMode, migrationMode, softwarePackages)),
    getGroupRequest: (groupname) => dispatch(getGroupRequest(groupname)),
    editGroupRequest: (groupname, saveAndRestoreMode, migrationMode, softwarePackages) => dispatch(editGroupRequest(groupname, saveAndRestoreMode, migrationMode, softwarePackages)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroup);
