//
// Container Buttons page save
//

import { connect } from 'react-redux';
import { SaveButtons } from 'components/Save/Buttons';
import { dateSave } from 'containers/SaveCreation/Form/Date/actions';
import { timeSave } from 'containers/SaveCreation/Form/Time/actions';
import { frequencySave } from 'containers/SaveCreation/Form/Frequency/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dateSave: (date) => dispatch(dateSave(date)),
    timeSave: (time) => dispatch(timeSave(time)),
    frequencySave: (frequency) => dispatch(frequencySave(frequency)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveButtons);
