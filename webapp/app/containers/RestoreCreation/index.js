//
// Container page restoreCreation
//

import { connect } from 'react-redux';
import { resetState, getRestores, nameUser, setUserId, listFiles, selectFiles, listSaves, createRestoresRequest, getHistorySavesByUserRequest } from './actions';
import { RestoreCreation } from 'components/RestoreCreation';

function mapStateToProps(state) {
  return {
    state: state.get('restoreCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetState: () => dispatch(resetState()),
    getRestores: (restores) => dispatch(getRestores(restores)),
    nameUser: (user) => dispatch(nameUser(user)),
    setUserId: (userId) => dispatch(setUserId(userId)),
    listFiles: (files) => dispatch(listFiles(files)),
    selectFiles: (selectedFiles) => dispatch(selectFiles(selectedFiles)),
    listSaves: (saves) => dispatch(listSaves(saves)),
    createRestoresRequest: (state, redirect) => dispatch(createRestoresRequest(state, redirect)),
    getHistorySavesByUserRequest: (username) => dispatch(getHistorySavesByUserRequest(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreCreation);
