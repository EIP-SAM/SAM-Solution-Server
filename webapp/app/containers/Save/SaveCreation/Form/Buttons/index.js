//
// Container page SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreationButtons } from 'components/SaveCreation/Form/Buttons';
import {
  resetStateSaving,
  createSave,
} from 'containers/Save/actions';

import {
  userErrorMsg,
} from 'containers/Save/SaveCreation/Form/Users/actions';

import {
  dateErrorMsg,
} from 'containers/Save/SaveCreation/Form/Date/actions';

import {
  timeErrorMsg,
} from 'containers/Save/SaveCreation/Form/Time/actions';

import {
  frequencyErrorMsg,
} from 'containers/Save/SaveCreation/Form/Frequency/actions';

import {
  resetStateFiles,
  fileErrorMsg,
} from 'containers/Save/SaveCreation/Form/Files/actions';

function mapStateToProps(state) {
  return {
    saving: state.get('saving'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetStateSaving: () => dispatch(resetStateSaving()),
    resetStateFiles: () => dispatch(resetStateFiles()),
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
