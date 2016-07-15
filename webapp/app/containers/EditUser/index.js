//
// Container EditUser
//

import { connect } from 'react-redux';
import { onChangeData } from './actions';
import { getUserRequest } from './actions';
import { getCurrentUserRequest } from './actions';
import { editUserRequest } from './actions';
import { EditUser } from 'components/EditUser';

function mapStateToProps(state) {
  return {
    state: state.get('editUser'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeData: (username, email, password, confirmation) => dispatch(onChangeData(username, email, password, confirmation)),
    getUserRequest: (username) => dispatch(getUserRequest(username)),
    getCurrentUserRequest: () => dispatch(getCurrentUserRequest()),
    editUserRequest: (username, email, password, confirmation) => dispatch(editUserRequest(username, email, password, confirmation)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUser);
