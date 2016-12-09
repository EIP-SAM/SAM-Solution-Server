//
// Container for Migration History Table Line component
//

import { connect } from 'react-redux';
import Line from 'components/MigrationHistory/Table/Line';
import {
  setSelectedImage,
  setSelectedUser,
  showCreateMigrationPopup,
} from '../Create/actions';
import {
  setStatusDeleteMigrationModal,
} from '../Delete/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedUser: (userId) => dispatch(setSelectedUser(userId)),
    setSelectedImage: (imageId) => dispatch(setSelectedImage(imageId)),
    showCreateMigrationPopup: (isPoppedUp, migrationEdited) => dispatch(showCreateMigrationPopup(isPoppedUp, migrationEdited)),
    deleteMigration: (migration) => dispatch(setStatusDeleteMigrationModal(true, migration)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Line);
