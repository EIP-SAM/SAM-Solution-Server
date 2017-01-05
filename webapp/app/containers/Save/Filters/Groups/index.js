//
// Container groups filter in page save
//

import { connect } from 'react-redux';
import SaveFiltersGroups from 'components/Save/Filters/Groups';
import { filterUsers } from 'containers/Save/Filters/actions';
import {
  getGroupsRequest,
  getGroups,
  getCurrentGroup,
} from './actions';

function mapStateToProps(state) {
  return {
    groups: state.get('save').get('SaveFiltersReducer').get('SaveGroupsFilterReducer').groups,
    currentTypeUser: state.get('save').get('SaveFiltersReducer').get('SaveTypeUserFilterReducer').currentTypeUser,
    allUsers: state.get('save').get('SaveFiltersReducer').get('SaveFiltersReducer').allUsers,
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
)(SaveFiltersGroups);
