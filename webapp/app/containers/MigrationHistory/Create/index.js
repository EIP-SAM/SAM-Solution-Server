//
// Container for Migration History Create
//

import { connect } from 'react-redux';
import Create from 'components/MigrationHistory/Create';
import {
  showCreateMigrationPopup,
  resetForm,
} from './actions';

function mapStateToProps(state) {
  return {
    isPoppedUp: state.get('migrationHistory').get('create').isPoppedUp,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showCreateMigrationPopup: (isPoppedUp) => dispatch(showCreateMigrationPopup(isPoppedUp)),
    resetForm: () => dispatch(resetForm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create);
