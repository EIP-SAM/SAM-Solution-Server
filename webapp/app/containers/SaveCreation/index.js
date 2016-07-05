//
// Container page create save
//

import { connect } from 'react-redux';
import { SaveCreation } from 'components/SaveCreation';
import { showModal, hideModal } from './actions';

function mapStateToProps(state) {
  return {
    data: state.get('saveHistory'),
    state: state.get('saveCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFile: () => dispatch(showModal()),
    cancelAddingFile: () => dispatch(hideModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveCreation);
