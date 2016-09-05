//
// Container frequency form page SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreationFrequencyFormGroup } from 'components/SaveCreation/Form/FrequencyFormGroup';
import {
  frequencySave,
} from 'containers/Save/actions';

function mapStateToProps(state) {
  return {
    frequency: state.get('saving').frequency,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    frequencySave: (frequency) => dispatch(frequencySave(frequency)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveCreationFrequencyFormGroup);
