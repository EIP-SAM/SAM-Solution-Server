//
// Container Filter in page save
//

import { connect } from 'react-redux';
import { SaveFiltersTypeUser } from 'components/Save/Filters/TypeUser';
import { getCurrentTypeUser } from './actions';
import { filterUsers } from 'containers/Save/Filters/actions';

function mapStateToProps(state) {
  return {
    currentGroup: state.get('save').get('SaveFiltersReducer').get('SaveGroupsFilterReducer').currentGroup,
    allUsers: state.get('save').get('SaveFiltersReducer').get('SaveFiltersReducer').allUsers,
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
)(SaveFiltersTypeUser);
