//
// Container page history save by user
//

import { connect } from 'react-redux';
import { SaveHistory } from 'components/SaveHistory';
import {
  getHistorySavesByUserRequest,
} from './actions';


function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHistorySavesByUserRequest: (username) => dispatch(getHistorySavesByUserRequest(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHistory);
