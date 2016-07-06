//
// Container page create save
//

import { connect } from 'react-redux';
import { SaveCreation } from 'components/SaveCreation';
import { showModal, hideModal, addFile } from './actions';

function mapStateToProps(state) {
  return {
    data: state.get('saveHistory'),
    state: state.get('saveCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showAddFileModal: () => dispatch(showModal()),
    cancelAddingFile: () => dispatch(hideModal()),
    addFile: (file) => dispatch(addFile(file)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveCreation);
