//
// Container page save
//

import { connect } from 'react-redux';
import { dateSave, timeSave, frequencySave, addAllFiles } from 'containers/SaveCreation/actions';
import { getSavesRequest } from './actions';
import { Save } from 'components/Save';

function mapStateToProps(state) {
  return {
    state: state.get('save'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSavesRequest: () => dispatch(getSavesRequest()),
    dateSave: (date) => dispatch(dateSave(date)),
    timeSave: (time) => dispatch(timeSave(time)),
    frequencySave: (frequency) => dispatch(frequencySave(frequency)),
    addAllFiles: (files) => dispatch(addAllFiles(files)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Save);
