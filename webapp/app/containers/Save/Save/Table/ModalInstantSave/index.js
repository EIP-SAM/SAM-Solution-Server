//
// Container modal of a instant save in page save
//

import { connect } from 'react-redux';
import { SaveInstantSaveModal } from 'components/Save/Table/ModalInstantSave';
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
    showInstantSaveModal: state.get('save').get('SaveTableInstantSaveModalReducer').showInstantSaveModal,
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
)(SaveInstantSaveModal);
