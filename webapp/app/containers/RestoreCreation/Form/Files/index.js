//
// Container files form page restore creation
//

import { connect } from 'react-redux';
import { selectFiles } from './actions';
import { RestoreCreationFilesFormGroup } from 'components/RestoreCreation/Form/FilesFormGroup';

function mapStateToProps(state) {
  return {
    allSaves: state.get('restoreCreation').get('SavesRestoreCreationReducer').allSaves,
    files: state.get('restoreCreation').get('FilesRestoreCreationReducer').files,
    filesError: state.get('restoreCreation').get('FilesRestoreCreationReducer').filesError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectFiles: (selectedFiles) => dispatch(selectFiles(selectedFiles)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreCreationFilesFormGroup);
