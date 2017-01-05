//
// Container software mode group rights create group form
//

import { connect } from 'react-redux';
import CreateGroupFormGroupRightsSoftwareMode from 'components/CreateGroup/Form/GroupRights/SoftwareMode';
import softwareModeChange from './actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    softwareModeChange: softwareMode => dispatch(softwareModeChange(softwareMode)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGroupFormGroupRightsSoftwareMode);
