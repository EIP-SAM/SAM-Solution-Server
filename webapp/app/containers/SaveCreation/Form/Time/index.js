//
// Container time form page SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreationTimeFormGroup } from 'components/SaveCreation/Form/TimeFormGroup';
import {
  timeSave,
} from './actions';

function mapStateToProps(state) {
  return {
    time: state.get('saveCreation').get('SaveCreationFormTimeReducer').time,
    timeError: state.get('saveCreation').get('SaveCreationFormTimeReducer').timeError,
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
)(SaveCreationTimeFormGroup);