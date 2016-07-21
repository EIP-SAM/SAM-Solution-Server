//
// Container Login
//

import { connect } from 'react-redux';
import { createGroupRequest } from './actions';
import { onChangeData } from './actions';
import { CreateGroup } from 'components/CreateGroup';

function mapStateToProps(state) {
  return {
    state: state.get('createGroup'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createGroupRequest: (group) => dispatch(createGroupRequest(group)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGroup);
