//
// Container page history save by user
//

import { connect } from 'react-redux';
import { SaveHistory } from 'components/SaveHistory';
import { getHistorySavesByUserRequest } from './actions';
import { listUsers } from 'containers/SaveCreation/Form/Users/actions';

function mapStateToProps(state) {
  return {
    userInfo: state.get('app').userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHistorySavesByUserRequest: (username) => dispatch(getHistorySavesByUserRequest(username)),
    listUsers: (users) => dispatch(listUsers(users)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHistory);
