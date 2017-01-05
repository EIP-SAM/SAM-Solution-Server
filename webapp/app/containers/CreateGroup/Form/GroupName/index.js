//
// Container group name create group form
//

import { connect } from 'react-redux';
import CreateGroupFormGroupName from 'components/CreateGroup/Form/GroupName';
import { groupNameChange } from './actions';

function mapStateToProps(state) {
  return {
    groupName: state.get('createGroup').get('CreateGroupFormGroupNameReducer').groupName,
    groupNameError: state.get('createGroup').get('CreateGroupFormGroupNameReducer').groupNameError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    groupNameChange: groupName => dispatch(groupNameChange(groupName)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGroupFormGroupName);
