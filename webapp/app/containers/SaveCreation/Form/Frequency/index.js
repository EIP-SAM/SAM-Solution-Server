//
// Container frequency form page SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreationFrequencyFormGroup } from 'components/SaveCreation/Form/FrequencyFormGroup';
import { frequencySave } from './actions';

function mapStateToProps(state) {
  return {
    frequency: state.get('saveCreation').get('SaveCreationFormFrequencyReducer').frequency,
    isFrequencyDisabled: state.get('saveCreation').get('SaveCreationFormFrequencyReducer').isFrequencyDisabled,
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
