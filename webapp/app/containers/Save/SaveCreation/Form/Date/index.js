//
// Container date form page SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreationDateFormGroup } from 'components/SaveCreation/Form/DateFormGroup';
import {
  dateSave,
} from 'containers/Save/actions';

function mapStateToProps(state) {
  return {
    date: state.get('saving').date,
    dateError: state.get('saveCreation').get('SaveCreationFormDateReducer').dateError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dateSave: (date) => dispatch(dateSave(date)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveCreationDateFormGroup);
