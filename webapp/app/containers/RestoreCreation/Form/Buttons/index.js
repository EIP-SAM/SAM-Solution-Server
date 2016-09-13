//
// Container page restore creation
//

import { connect } from 'react-redux';
import { RestoreCreationButtons } from 'components/RestoreCreation/Form/Buttons';
import { saveErrorMsg } from 'containers/RestoreCreation/Form/Saves/actions';
import { filesErrorMsg } from 'containers/RestoreCreation/Form/Files/actions';
import {
   createRestoresRequest,
   resetStateForm,
} from 'containers/RestoreCreation/Form/actions';

function mapStateToProps(state) {
  return {
    userId: state.get('restoreCreation').get('UsersRestoreCreationReducer').userId,
    saves: state.get('restoreCreation').get('SavesRestoreCreationReducer').saves,
    selectedFiles: state.get('restoreCreation').get('FilesRestoreCreationReducer').selectedFiles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createRestoresRequest: (userId, selectedFiles, redirect) => dispatch(createRestoresRequest(userId, selectedFiles, redirect)),
    saveErrorMsg: (saveError) => dispatch(saveErrorMsg(saveError)),
    filesErrorMsg: (filesError) => dispatch(filesErrorMsg(filesError)),
    resetStateForm: () => dispatch(resetStateForm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreCreationButtons);
