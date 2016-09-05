//
// Container buttons in page history save by user
//

import { connect } from 'react-redux';
import { SaveHistoryButtons } from 'components/SaveHistory/Buttons';
import {
  dateSave,
  timeSave,
  frequencySave,
} from 'containers/Save/actions';

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
)(SaveHistoryButtons);
