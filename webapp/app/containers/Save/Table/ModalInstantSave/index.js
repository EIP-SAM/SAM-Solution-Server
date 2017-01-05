//
// Container modal of a instant save in page save
//

import { connect } from 'react-redux';
import { SaveInstantSaveModal } from 'components/Save/Table/ModalInstantSave';
import {
  resetStateForm,
  createSave,
} from 'containers/SaveCreation/Form/actions';
import { hideInstantSaveModal } from './actions';

function mapStateToProps(state) {
  return {
    users: state.get('saveCreation').get('SaveCreationFormUsersReducer').users,
    date: state.get('saveCreation').get('SaveCreationFormDateReducer').date,
    time: state.get('saveCreation').get('SaveCreationFormTimeReducer').time,
    frequency: state.get('saveCreation').get('SaveCreationFormFrequencyReducer').frequency,
    files: state.get('saveCreation').get('SaveCreationFormFilesReducer').get('SaveCreationFormFilesReducer').files,
    showInstantSaveModal: state.get('save').get('SaveTableInstantSaveModalReducer').showInstantSaveModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideInstantSaveModal: () => dispatch(hideInstantSaveModal()),
    createSave: (redirect, users, date, time, frequency, files) => dispatch(createSave(redirect, users, date, time, frequency, files)),
    resetStateForm: () => dispatch(resetStateForm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveInstantSaveModal);
