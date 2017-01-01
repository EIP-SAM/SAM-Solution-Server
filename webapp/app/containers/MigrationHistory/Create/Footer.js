//
// Container for Migration History Create Status Select
//

import { connect } from 'react-redux';
import Footer from 'components/MigrationHistory/Create/Footer';
import {
  createMigration,
  showCreateMigrationPopup,
  resetForm,
  editMigration,
} from './actions';

function mapStateToProps(state) {
  return {
    userId: state.get('migrationHistory').get('create').userId,
    imageId: state.get('migrationHistory').get('create').imageId,
    date: state.get('migrationHistory').get('create').date,
    time: state.get('migrationHistory').get('create').time,    
    migrationEdited: state.get('migrationHistory').get('create').migrationEdited,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createMigration: (migration) => dispatch(createMigration(migration)),
    editMigration: (migration) => dispatch(editMigration(migration)),
    showCreateMigrationPopup: (isPoppedUp) => dispatch(showCreateMigrationPopup(isPoppedUp)),
    resetForm: () => dispatch(resetForm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
