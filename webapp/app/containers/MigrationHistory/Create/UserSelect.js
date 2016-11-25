//
// Container for Migration History Create User Select
//

import { connect } from 'react-redux';
import UserSelect from 'components/MigrationHistory/Create/UserSelect';
import {
  getAllUsers,
  setSelectedUser,
} from './actions';

function mapStateToProps(state) {
  return {
    users: state.get('migrationHistory').get('create').users,
    userId: state.get('migrationHistory').get('create').userId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: () => dispatch(getAllUsers()),
    setSelectedUser: (userId) => dispatch(setSelectedUser(userId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserSelect);
