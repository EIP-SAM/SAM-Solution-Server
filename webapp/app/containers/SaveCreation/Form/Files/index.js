//
// Container page SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreationFiles } from 'components/SaveCreation/Form/Files';
import { displayAddFile } from './actions';
import { showModal } from './Modal/actions';

function mapStateToProps(state) {
  return {
    files: state.get('saveCreation').get('SaveCreationFormFilesReducer').get('SaveCreationFormFilesReducer').files,
    canAddFile: state.get('saveCreation').get('SaveCreationFormFilesReducer').get('SaveCreationFormFilesReducer').canAddFile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    displayAddFile: canAddFile => dispatch(displayAddFile(canAddFile)),
    showAddFileModal: () => dispatch(showModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveCreationFiles);
