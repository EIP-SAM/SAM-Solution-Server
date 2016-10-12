//
// Container Filter in page restore
//

import { connect } from 'react-redux';
import { RestoreFiltersTypeUser } from 'components/Restore/Filters/TypeUser';
import { getCurrentTypeUser } from './actions';
import { filterUsers } from 'containers/Restore/Filters/actions';

function mapStateToProps(state) {
  return {
    currentGroup: state.get('restore').get('RestoreFiltersReducer').get('RestoreGroupsFilterReducer').currentGroup,
    allUsers: state.get('restore').get('RestoreFiltersReducer').get('RestoreFiltersReducer').allUsers,
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
)(RestoreFiltersTypeUser);
