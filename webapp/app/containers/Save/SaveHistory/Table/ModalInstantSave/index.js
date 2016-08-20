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
} from 'containers/Save/SaveHistory/Table/actions';


function mapStateToProps(state) {
  return {
    saving: state.get('saving'),
    state: state.get('saveHistory').get('SaveHistoryTableReducer'),
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
)(SaveHistoryInstantSaveModal);
