//
// Container page SoftwareUsersList
//

import { connect } from 'react-redux';
import { SoftwareUsersListComponent } from 'components/SoftwareUsersList';
import { startSocketIo } from './actions';

function mapStateToProps(state) {
  return {
    socketData: state.get('softwareUsersList'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startSocketIo: () => dispatch(startSocketIo()),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SoftwareUsersListComponent);
