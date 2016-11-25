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

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedUser: (userId) => dispatch(setSelectedUser(userId)),
    setSelectedImage: (imageId) => dispatch(setSelectedImage(imageId)),
    showCreateMigrationPopup: (isPoppedUp, migrationEdited) => dispatch(showCreateMigrationPopup(isPoppedUp, migrationEdited)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Line);
