//
// Container Filter in page users
//

import { connect } from 'react-redux';
import { UsersFiltersTypeUser } from 'components/Users/Filters/TypeUser';
import { getCurrentTypeUser } from './actions';
import { filterUsers } from 'containers/Users/Filters/actions';

function mapStateToProps(state) {
  return {
    currentGroup: state.get('users').get('UsersFiltersReducer').get('UsersGroupsFilterReducer').currentGroup,
    allUsers: state.get('users').get('UsersFiltersReducer').get('UsersFiltersReducer').allUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentTypeUser: currentTypeUser => dispatch(getCurrentTypeUser(currentTypeUser)),
    filterUsers: (currentTypeUser, currentGroup, allUsers) => dispatch(filterUsers(currentTypeUser, currentGroup, allUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersFiltersTypeUser);
