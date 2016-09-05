//
// Container Buttons page save
//

import { connect } from 'react-redux';
import { SaveButtons } from 'components/Save/Buttons';
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
)(SaveButtons);
