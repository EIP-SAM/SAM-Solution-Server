//
// Container Buttons page save
//

import { connect } from 'react-redux';
import { SaveButtons } from 'components/Save/Buttons';
import { listUsers } from 'containers/SaveCreation/Form/Users/actions';
import {
  timeSave,
  timeDisabled,
} from 'containers/SaveCreation/Form/Time/actions';

import {
  frequencySave,
  frequencyDisabled,
} from 'containers/SaveCreation/Form/Frequency/actions';

import {
  dateSave,
  dateDisabled,
} from 'containers/SaveCreation/Form/Date/actions';

function mapStateToProps(state) {
  return {
    saves: state.get('save').get('SaveReducer').saves,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    listUsers: users => dispatch(listUsers(users)),
    dateSave: date => dispatch(dateSave(date)),
    dateDisabled: isDateDisabled => dispatch(dateDisabled(isDateDisabled)),
    timeSave: time => dispatch(timeSave(time)),
    timeDisabled: isTimeDisabled => dispatch(timeDisabled(isTimeDisabled)),
    frequencySave: frequency => dispatch(frequencySave(frequency)),
    frequencyDisabled: isFrequencyDisabled => dispatch(frequencyDisabled(isFrequencyDisabled)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveButtons);
