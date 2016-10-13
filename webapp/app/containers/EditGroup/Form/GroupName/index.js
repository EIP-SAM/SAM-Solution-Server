//
// Container group name edit group form
//

import { connect } from 'react-redux';
import { EditGroupFormGroupName } from 'components/EditGroup/Form/GroupName';
import { groupNameChange } from './actions';

function mapStateToProps(state) {
  return {
    groupName: state.get('editGroup').get('EditGroupFormGroupNameReducer').groupName,
    groupNameError: state.get('editGroup').get('EditGroupFormGroupNameReducer').groupNameError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    groupNameChange: (groupName) => dispatch(groupNameChange(groupName)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroupFormGroupName);
