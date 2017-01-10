//
// Container groups form edit user
//

import { connect } from 'react-redux';
import EditUserFormGroups from 'components/EditUser/Form/Groups';
import {
  getUserGroups,
  resetStateGroups,
} from './actions';

function mapStateToProps(state) {
  return {
    allGroups: state.get('editUser').get('EditUserFormGroupsReducer').allGroups,
    userGroups: state.get('editUser').get('EditUserFormGroupsReducer').userGroups,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserGroups: userGroups => dispatch(getUserGroups(userGroups)),
    resetStateGroups: () => dispatch(resetStateGroups()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserFormGroups);
