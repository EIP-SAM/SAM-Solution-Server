//
// Container page create save
//

import { connect } from 'react-redux';
import { SaveCreation } from 'components/SaveCreation';
import {
  resetStateSaving,
  listUsers,
  dateSave,
  timeSave,
  frequencySave,
  addFile,
  createSave,
} from 'containers/Save/actions';

import {
  resetStateSaveCreation,
  displayAddFile,
  inputFileChange,
  showModal,
  hideModal,
  userErrorMsg,
  dateErrorMsg,
  timeErrorMsg,
  frequencyErrorMsg,
  fileErrorMsg,
 } from './actions';

function mapStateToProps(state) {
  return {
    saving: state.get('saving'),
    listUsersState: state.get('save'),
    state: state.get('saveCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetStateSaving: () => dispatch(resetStateSaving()),
    resetStateSaveCreation: () => dispatch(resetStateSaveCreation()),
    listUsers: (users) => dispatch(listUsers(users)),
    dateSave: (date) => dispatch(dateSave(date)),
    timeSave: (time) => dispatch(timeSave(time)),
    frequencySave: (frequency) => dispatch(frequencySave(frequency)),
    addFile: (file) => dispatch(addFile(file)),
    displayAddFile: (canAddFile) => dispatch(displayAddFile(canAddFile)),
    inputFileChange: (file) => dispatch(inputFileChange(file)),
    showAddFileModal: () => dispatch(showModal()),
    cancelAddingFile: () => dispatch(hideModal()),
    createSave: (state, redirect) => dispatch(createSave(state, redirect)),
    userErrorMsg: (userError) => dispatch(userErrorMsg(userError)),
    dateErrorMsg: (dateError) => dispatch(dateErrorMsg(dateError)),
    timeErrorMsg: (timeError) => dispatch(timeErrorMsg(timeError)),
    frequencyErrorMsg: (frequencyError) => dispatch(frequencyErrorMsg(frequencyError)),
    fileErrorMsg: (fileError) => dispatch(fileErrorMsg(fileError)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveCreation);
