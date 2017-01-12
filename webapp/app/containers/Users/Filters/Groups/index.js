//
// Container groups filters page users
//

import { connect } from 'react-redux';
import UsersFiltersGroups from 'components/Users/Filters/Groups';
import { filterUsers } from 'containers/Users/Filters/actions';
import {
  getGroupsRequest,
  getGroups,
  getCurrentGroup,
} from './actions';

function mapStateToProps(state) {
  return {
    groups: state.get('users').get('UsersFiltersReducer').get('UsersGroupsFilterReducer').groups,
    currentTypeUser: state.get('users').get('UsersFiltersReducer').get('UsersTypeUserFilterReducer').currentTypeUser,
    allUsers: state.get('users').get('UsersFiltersReducer').get('UsersFiltersReducer').allUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroupsRequest: () => dispatch(getGroupsRequest()),
    getGroups: listGroups => dispatch(getGroups(listGroups)),
    getCurrentGroup: currentGroup => dispatch(getCurrentGroup(currentGroup)),
    filterUsers: (currentTypeUser, currentGroup, allUsers) => dispatch(filterUsers(currentTypeUser, currentGroup, allUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersFiltersGroups);
