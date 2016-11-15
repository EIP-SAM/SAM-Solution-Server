//
// Container Filter in page software
//

import { connect } from 'react-redux';
import { SoftwareFiltersTypeUser } from 'components/Software/Filters/TypeUser';
import { getCurrentTypeUser } from './actions';
import { filterUsers } from 'containers/Software/Filters/actions';

function mapStateToProps(state) {
  return {
    currentGroup: state.get('software').get('SoftwareFiltersReducer').get('SoftwareGroupsFilterReducer').currentGroup,
    allUsers: state.get('software').get('SoftwareFiltersReducer').get('SoftwareFiltersReducer').allUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentTypeUser: (currentTypeUser) => dispatch(getCurrentTypeUser(currentTypeUser)),
    filterUsers: (currentTypeUser, currentGroup, allUsers) => dispatch(filterUsers(currentTypeUser, currentGroup, allUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwareFiltersTypeUser);
