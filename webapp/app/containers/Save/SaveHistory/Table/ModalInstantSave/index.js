//
// Container instant save modal in page history save by user
//

import { connect } from 'react-redux';
import { SaveHistoryInstantSaveModal } from 'components/SaveHistory/Table/ModalInstantSave';
import {
  resetStateSaving,
  createSave,
} from 'containers/Save/actions';

import {
  hideInstantSaveModal,
} from './actions';


function mapStateToProps(state) {
  return {
    saving: state.get('saving'),
    showInstantSaveModal: state.get('saveHistory').get('SaveHistoryTableInstantSaveModalReducer').showInstantSaveModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideInstantSaveModal: () => dispatch(hideInstantSaveModal()),
    createSave: (redirect, users, date, time, frequency, files) => dispatch(createSave(redirect, users, date, time, frequency, files)),
    resetStateSaving: () => dispatch(resetStateSaving()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHistoryInstantSaveModal);
