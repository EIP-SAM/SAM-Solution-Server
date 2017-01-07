//
// Container groups form create user
//

import { connect } from 'react-redux';
import CreateUserFormGroups from 'components/CreateUser/Form/Groups';
import {
  getGroupsRequest,
  getSelectedGroup,
} from './actions';

function mapStateToProps(state) {
  return {
    groups: state.get('createUser').get('CreateUserFormGroupsReducer').groups,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroupsRequest: () => dispatch(getGroupsRequest()),
    getSelectedGroup: group => dispatch(getSelectedGroup(group)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUserFormGroups);
