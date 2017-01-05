//
// Container form page restore creation
//

import { connect } from 'react-redux';
import { getHistorySavesByUserRequest } from './actions';
import { RestoreCreationForm } from 'components/RestoreCreation/Form';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHistorySavesByUserRequest: username => dispatch(getHistorySavesByUserRequest(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreCreationForm);
