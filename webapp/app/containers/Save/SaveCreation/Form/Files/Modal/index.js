//
// Container files modal page SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreationAddFileModal } from 'components/SaveCreation/Form/FilesFormGroup/Modal';
import {
  addFile,
} from 'containers/Save/actions';

import {
  inputFileChange,
  hideModal,
 } from './actions';

function mapStateToProps(state) {
  return {
    inputFileChangeState: state.get('saveCreation').get('SaveCreationFormFilesReducer').get('SaveCreationFormFilesModalReducer').inputFileChange,
    showModal: state.get('saveCreation').get('SaveCreationFormFilesReducer').get('SaveCreationFormFilesModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFile: (file) => dispatch(addFile(file)),
    inputFileChange: (file) => dispatch(inputFileChange(file)),
    cancelAddingFile: () => dispatch(hideModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveCreationAddFileModal);
