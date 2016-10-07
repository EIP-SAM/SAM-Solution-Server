//
// Container groups filters page users
//

import { connect } from 'react-redux';
import { GroupsFormGroup } from 'components/Users/Filters/GroupsFormGroup';
import { filterUsers } from 'containers/Users/Filters/actions';
import {
  getGroupsRequest,
  getGroups,
  getCurrentGroup,
} from './actions';

function mapStateToProps(state) {
  return {
    groups: state.get('users').get('RestoreFiltersReducer').get('RestoreGroupsFilterReducer').groups,
    currentTypeUser: state.get('users').get('RestoreFiltersReducer').get('RestoreTypeUserFilterReducer').currentTypeUser,
    allUsers: state.get('users').get('RestoreFiltersReducer').get('RestoreFiltersReducer').allUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroupsRequest: () => dispatch(getGroupsRequest()),
    getGroups: (listGroups) => dispatch(getGroups(listGroups)),
    getCurrentGroup: (currentGroup) => dispatch(getCurrentGroup(currentGroup)),
    filterUsers: (currentTypeUser, currentGroup, allUsers) => dispatch(filterUsers(currentTypeUser, currentGroup, allUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupsFormGroup);
