//
// Container Login
//

import { connect } from 'react-redux';
import { createUserRequest } from './actions';
import { CreateUser } from 'components/CreateUser';

function mapStateToProps(state) {
  return {
    state: state.get('createUser'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUserRequest: (user) => dispatch(createUserRequest(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUser);
