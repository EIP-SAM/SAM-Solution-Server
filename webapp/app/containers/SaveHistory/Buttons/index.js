//
// Container buttons in page history save by user
//

import { connect } from 'react-redux';
import { SaveHistoryButtons } from 'components/SaveHistory/Buttons';
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

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
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
)(SaveHistoryButtons);
