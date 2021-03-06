//
// Container page history save by user
//

import { connect } from 'react-redux';
import SaveHistory from 'components/SaveHistory';
import { listUsers } from 'containers/SaveCreation/Form/Users/actions';
import { getHistorySavesByUserRequest } from './actions';

function mapStateToProps(state) {
  return {
    userIsAdmin: state.get('app').userInfo.isAdmin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHistorySavesByUserRequest: username => dispatch(getHistorySavesByUserRequest(username)),
    listUsers: users => dispatch(listUsers(users)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHistory);
