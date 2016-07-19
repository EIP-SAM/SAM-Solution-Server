//
// Container page restoreCreation
//

import { connect } from 'react-redux';
import { getRestores, nameUser, setUserId, selectSave, selectFiles, listSaves, createRestoresRequest, getHistorySavesByUserRequest, saveErrorMsg, filesErrorMsg } from './actions';
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
    selectSave: (save) => dispatch(selectSave(save)),
    selectFiles: (selectedFiles) => dispatch(selectFiles(selectedFiles)),
    listSaves: (saves) => dispatch(listSaves(saves)),
    createRestoresRequest: (state, redirect) => dispatch(createRestoresRequest(state, redirect)),
    getHistorySavesByUserRequest: (username) => dispatch(getHistorySavesByUserRequest(username)),
    saveErrorMsg: (saveError) => dispatch(saveErrorMsg(saveError)),
    filesErrorMsg: (filesError) => dispatch(filesErrorMsg(filesError)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreCreation);
