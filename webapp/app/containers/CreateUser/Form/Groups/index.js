//
// Container groups form create user
//

import { connect } from 'react-redux';
import { CreateUserFormGroupsFormGroup } from 'components/CreateUser/Form/GroupsFormGroup';
import {
  getGroupsRequest,
  getSelectedGroup,
} from './actions';

function mapStateToProps(state) {
  return {
    groups: state.get('createUser').get('CreateUserFormGroupsReducer').groups,
    selectedGroup: state.get('createUser').get('CreateUserFormGroupsReducer').selectedGroup,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroupsRequest: () => dispatch(getGroupsRequest()),
    getSelectedGroup: (group) => dispatch(getSelectedGroup(group)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUserFormGroupsFormGroup);