//
// Container time form page SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreationTime } from 'components/SaveCreation/Form/Time';
import {
  timeSave,
} from './actions';

function mapStateToProps(state) {
  return {
    time: state.get('saveCreation').get('SaveCreationFormTimeReducer').time,
    timeError: state.get('saveCreation').get('SaveCreationFormTimeReducer').timeError,
    isTimeDisabled: state.get('saveCreation').get('SaveCreationFormTimeReducer').isTimeDisabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    timeSave: (time) => dispatch(timeSave(time)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveCreationTime);
