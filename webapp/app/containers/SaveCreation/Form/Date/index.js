//
// Container date form page SaveCreation
//

import { connect } from 'react-redux';
import { SaveCreationDate } from 'components/SaveCreation/Form/Date';
import { dateSave } from './actions';

function mapStateToProps(state) {
  return {
    date: state.get('saveCreation').get('SaveCreationFormDateReducer').date,
    dateError: state.get('saveCreation').get('SaveCreationFormDateReducer').dateError,
    isDateDisabled: state.get('saveCreation').get('SaveCreationFormDateReducer').isDateDisabled,
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
)(SaveCreationDate);
