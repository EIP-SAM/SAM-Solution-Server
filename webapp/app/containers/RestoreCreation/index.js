//
// Container page restoreCreation
//

import { connect } from 'react-redux';
import { resetState, nameUser, setUserId, selectSave, selectFiles, listFiles, createRestoresRequest, getHistorySavesByUserRequest, saveErrorMsg, filesErrorMsg } from './actions';
import { RestoreCreation } from 'components/RestoreCreation';

function mapStateToProps(state) {
  return {
    state: state.get('restoreCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetState: () => dispatch(resetState()),
    nameUser: (user) => dispatch(nameUser(user)),
    setUserId: (userId) => dispatch(setUserId(userId)),
    selectSave: (save) => dispatch(selectSave(save)),
    selectFiles: (selectedFiles) => dispatch(selectFiles(selectedFiles)),
    listFiles: (files) => dispatch(listFiles(files)),
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
