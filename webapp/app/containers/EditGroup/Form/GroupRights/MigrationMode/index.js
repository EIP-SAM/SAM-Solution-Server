//
// Container software mode group rights edit group form
//

import { connect } from 'react-redux';
import EditGroupFormGroupRightsMigrationMode from 'components/EditGroup/Form/GroupRights/MigrationMode';
import migrationModeChange from './actions';

function mapStateToProps(state) {
  return {
    migrationMode: state.get('editGroup').get('EditGroupFormGroupRightsMigrationModeReducer').migrationMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    migrationModeChange: migrationMode => dispatch(migrationModeChange(migrationMode)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroupFormGroupRightsMigrationMode);
