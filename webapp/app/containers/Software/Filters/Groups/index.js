//
// Container groups filters page software
//

import { connect } from 'react-redux';
import { SoftwareFiltersGroups } from 'components/Software/Filters/Groups';
import { filterUsers } from 'containers/Software/Filters/actions';
import {
  getGroupsRequest,
  getGroups,
  getCurrentGroup,
} from './actions';

function mapStateToProps(state) {
  return {
    groups: state.get('software').get('SoftwareFiltersReducer').get('SoftwareGroupsFilterReducer').groups,
    currentTypeUser: state.get('software').get('SoftwareFiltersReducer').get('SoftwareTypeUserFilterReducer').currentTypeUser,
    allUsers: state.get('software').get('SoftwareFiltersReducer').get('SoftwareFiltersReducer').allUsers,
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
)(SoftwareFiltersGroups);
