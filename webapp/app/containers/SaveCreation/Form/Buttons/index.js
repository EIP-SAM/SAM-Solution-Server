//
// Container page SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreationButtons } from 'components/SaveCreation/Form/Buttons';
import { userErrorMsg } from 'containers/SaveCreation/Form/Users/actions';
import { dateErrorMsg } from 'containers/SaveCreation/Form/Date/actions';
import { timeErrorMsg } from 'containers/SaveCreation/Form/Time/actions';
import { frequencyErrorMsg } from 'containers/SaveCreation/Form/Frequency/actions';
import { fileErrorMsg } from 'containers/SaveCreation/Form/Files/actions';
import { createSave } from 'containers/SaveCreation/Form/actions';

function mapStateToProps(state) {
  return {
    users: state.get('saveCreation').get('SaveCreationFormUsersReducer').users,
    date: state.get('saveCreation').get('SaveCreationFormDateReducer').date,
    time: state.get('saveCreation').get('SaveCreationFormTimeReducer').time,
    frequency: state.get('saveCreation').get('SaveCreationFormFrequencyReducer').frequency,
    files: state.get('saveCreation').get('SaveCreationFormFilesReducer').get('SaveCreationFormFilesReducer').files,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createSave: (redirect, users, date, time, frequency, files) => dispatch(createSave(redirect, users, date, time, frequency, files)),
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
)(SaveCreationButtons);
