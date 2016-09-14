//
// Container Buttons page save
//

import { connect } from 'react-redux';
import { SaveButtons } from 'components/Save/Buttons';
import { listUsers } from 'containers/SaveCreation/Form/Users/actions';
import { dateSave } from 'containers/SaveCreation/Form/Date/actions';
import { timeSave } from 'containers/SaveCreation/Form/Time/actions';
import { frequencySave } from 'containers/SaveCreation/Form/Frequency/actions';

function mapStateToProps(state) {
  return {
    saves: state.get('save').get('SaveReducer').saves,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    listUsers: (users) => dispatch(listUsers(users)),
    dateSave: (date) => dispatch(dateSave(date)),
    timeSave: (time) => dispatch(timeSave(time)),
    frequencySave: (frequency) => dispatch(frequencySave(frequency)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveButtons);
