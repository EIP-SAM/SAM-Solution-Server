//
// Container software mode group rights create group form
//

import { connect } from 'react-redux';
import { CreateGroupFormGroupRightsMigrationMode } from 'components/CreateGroup/Form/GroupRights/MigrationMode';
import { migrationModeChange } from './actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    migrationModeChange: (migrationMode) => dispatch(migrationModeChange(migrationMode)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGroupFormGroupRightsMigrationMode);
