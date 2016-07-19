//
// Container page create save
//

import { connect } from 'react-redux';
import { SaveCreation } from 'components/SaveCreation';
import {
  resetState,
  listUsers,
  dateSave,
  timeSave,
  frequencySave,
  addFile,
  displayAddFile,
  inputFileChange,
  showModal,
  hideModal,
  createSave,
  userErrorMsg,
  dateErrorMsg,
  timeErrorMsg,
  frequencyErrorMsg,
  fileErrorMsg,
 } from './actions';

function mapStateToProps(state) {
  return {
    listUsersState: state.get('save'),
    state: state.get('saveCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetState: () => dispatch(resetState()),
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
