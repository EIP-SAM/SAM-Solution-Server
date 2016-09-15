//
// Container saves form page restore creation
//

import { connect } from 'react-redux';
import { selectSave } from './actions';
import { listFiles } from 'containers/RestoreCreation/Form/Files/actions';
import { RestoreCreationSavesFormGroup } from 'components/RestoreCreation/Form/SavesFormGroup';

function mapStateToProps(state) {
  return {
    allSaves: state.get('restoreCreation').get('SavesRestoreCreationReducer').allSaves,
    saveError: state.get('restoreCreation').get('SavesRestoreCreationReducer').saveError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectSave: (save) => dispatch(selectSave(save)),
    listFiles: (files) => dispatch(listFiles(files)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreCreationSavesFormGroup);
