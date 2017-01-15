//
// Container dashboard by user page
//

import { connect } from 'react-redux';
import DashboardByUserSave from 'components/DashboardByUser/Save';
import { listUsers } from 'containers/SaveCreation/Form/Users/actions';
import { getHistorySavesByUserRequest } from 'containers/SaveHistory/actions';
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
    getHistorySavesByUserRequest: (username, limit) => dispatch(getHistorySavesByUserRequest(username, limit)),
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
)(DashboardByUserSave);
