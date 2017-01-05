//
// Container groups filters page restore
//

import { connect } from 'react-redux';
import { RestoreFiltersGroups } from 'components/Restore/Filters/Groups';
import { filterUsers } from 'containers/Restore/Filters/actions';
import {
  getGroupsRequest,
  getGroups,
  getCurrentGroup,
} from './actions';

function mapStateToProps(state) {
  return {
    groups: state.get('restore').get('RestoreFiltersReducer').get('RestoreGroupsFilterReducer').groups,
    currentTypeUser: state.get('restore').get('RestoreFiltersReducer').get('RestoreTypeUserFilterReducer').currentTypeUser,
    allUsers: state.get('restore').get('RestoreFiltersReducer').get('RestoreFiltersReducer').allUsers,
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
)(RestoreFiltersGroups);
