//
// Container groups form edit user
//

import { connect } from 'react-redux';
import { EditUserFormGroupsFormGroup } from 'components/EditUser/Form/GroupsFormGroup';
import { getUserGroups } from './actions';

function mapStateToProps(state) {
  return {
    allGroups: state.get('editUser').get('EditUserFormGroupsReducer').allGroups,
    userGroups: state.get('editUser').get('EditUserFormGroupsReducer').userGroups,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserGroups: (userGroups) => dispatch(getUserGroups(userGroups)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserFormGroupsFormGroup);
