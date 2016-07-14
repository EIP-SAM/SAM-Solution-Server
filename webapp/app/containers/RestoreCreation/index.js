//
// Container page restoreCreation
//

import { connect } from 'react-redux';
import { getRestores, nameUser, setUserId, listFiles, listSaves, createRestoresRequest, getHistorySavesByUserRequest } from './actions';
import { RestoreCreation } from 'components/RestoreCreation';

function mapStateToProps(state) {
  return {
    state: state.get('restoreCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRestores: (restores) => dispatch(getRestores(restores)),
    nameUser: (user) => dispatch(nameUser(user)),
    setUserId: (userId) => dispatch(setUserId(userId)),
    listFiles: (files) => dispatch(listFiles(files)),
    listSaves: (saves) => dispatch(listSaves(saves)),
    createRestoresRequest: (state) => dispatch(createRestoresRequest(state)),
    getHistorySavesByUserRequest: (username) => dispatch(getHistorySavesByUserRequest(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreCreation);
