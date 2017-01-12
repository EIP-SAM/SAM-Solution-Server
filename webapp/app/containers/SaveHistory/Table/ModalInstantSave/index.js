//
// Container instant save modal in page history save by user
//

import { connect } from 'react-redux';
import SaveHistoryInstantSaveModal from 'components/SaveHistory/Table/ModalInstantSave';
import { resetStateForm } from 'containers/SaveCreation/Form/actions';
import {
  hideInstantSaveModal,
  createSaveActionSaveHistory,
} from './actions';

function mapStateToProps(state) {
  return {
    users: state.get('saveCreation').get('SaveCreationFormUsersReducer').users,
    date: state.get('saveCreation').get('SaveCreationFormDateReducer').date,
    time: state.get('saveCreation').get('SaveCreationFormTimeReducer').time,
    frequency: state.get('saveCreation').get('SaveCreationFormFrequencyReducer').frequency,
    files: state.get('saveCreation').get('SaveCreationFormFilesReducer').get('SaveCreationFormFilesReducer').files,
    showInstantSaveModal: state.get('saveHistory').get('SaveHistoryTableInstantSaveModalReducer').showInstantSaveModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideInstantSaveModal: () => dispatch(hideInstantSaveModal()),
    createSaveActionSaveHistory: (users, date, time, frequency, files) => dispatch(createSaveActionSaveHistory(users, date, time, frequency, files)),
    resetStateForm: () => dispatch(resetStateForm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHistoryInstantSaveModal);
