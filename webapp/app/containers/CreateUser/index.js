//
// Container Login
//

import { connect } from 'react-redux';
import { createUserRequest } from './actions';
import { onChangeData } from './actions';
import { CreateUser } from 'components/CreateUser';

function mapStateToProps(state) {
  return {
    state: state.get('createUser'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeData: (username, email, password, confirmation) => dispatch(onChangeData(username, email, password, confirmation)),
    createUserRequest: (username, email, password, confirmation) => dispatch(createUserRequest(username, email, password, confirmation)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUser);
