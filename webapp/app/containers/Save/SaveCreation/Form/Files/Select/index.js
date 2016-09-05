//
// Container page SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreationFilesSelect } from 'components/SaveCreation/Form/FilesFormGroup/FilesSelect';

function mapStateToProps(state) {
  return {
    files: state.get('saving').files,
    fileError: state.get('saveCreation').get('SaveCreationFormFilesReducer').get('SaveCreationFormFilesReducer').fileError,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveCreationFilesSelect);
