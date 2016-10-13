//
// Container EditGroup
//

import { connect } from 'react-redux';
import { EditGroup } from 'components/EditGroup';
import { resetStateForm } from './Form/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetStateForm: () => dispatch(resetStateForm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroup);
