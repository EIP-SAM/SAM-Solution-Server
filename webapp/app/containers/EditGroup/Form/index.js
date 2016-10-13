//
// Container edit group form
//

import { connect } from 'react-redux';
import { EditGroupForm } from 'components/EditGroup/Form';
import { getGroupRequest } from './actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroupRequest: (groupId) => dispatch(getGroupRequest(groupId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroupForm);
