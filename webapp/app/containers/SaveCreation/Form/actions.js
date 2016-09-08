import { browserHistory } from 'react-router';
import request from 'utils/request';
import { resetStateUsers } from 'containers/SaveCreation/Form/Users/actions';
import { resetStateDate } from 'containers/SaveCreation/Form/Date/actions';
import { resetStateTime } from 'containers/SaveCreation/Form/Time/actions';
import { resetStateFrequency } from 'containers/SaveCreation/Form/Frequency/actions';
import { resetStateFiles } from 'containers/SaveCreation/Form/Files/actions';

export function resetStateForm() {
  return function resetState(dispatch) {
    dispatch(resetStateUsers());
    dispatch(resetStateDate());
    dispatch(resetStateTime());
    dispatch(resetStateFrequency());
    dispatch(resetStateFiles());
  };
}

//
// Get username of users list in state.
// Create save
// Syntaxe state.users : { value: user.id }
// Check if all elements send through the request are completed
//
export function createSave(redirect, users, date, time, frequency, files) {
  const usersId = [];
  for (const user of users) {
    usersId.push(user.value);
  }

  return function createSaveRequest(dispatch) {
    return request
      .post('/api/logged-in/create_save')
      .type('form')
      .send({
        usersId,
        date,
        time,
        frequency,
        files,
      })
      .end(() => {
        if (redirect) {
          browserHistory.goBack();
        }
        dispatch(resetStateForm());
      });
  };
}
