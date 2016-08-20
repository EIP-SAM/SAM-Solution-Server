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
} from 'containers/Save/Save/Table/actions';

function mapStateToProps(state) {
  return {
    saving: state.get('saving'),
    state: state.get('save').get('SaveTableReducer'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideInstantSaveModal: () => dispatch(hideInstantSaveModal()),
    createSave: (createSaveState, redirect) => dispatch(createSave(createSaveState, redirect)),
    resetStateSaving: () => dispatch(resetStateSaving()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveInstantSaveModal);
