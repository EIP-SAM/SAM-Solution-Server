//
// Container form page restore creation
//

import { connect } from 'react-redux';
import { RestoreCreationForm } from 'components/RestoreCreation/Form';
import { getHistorySavesByUserRequest } from './actions';

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
