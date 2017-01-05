//
// Container for Migration History Create
//

import { connect } from 'react-redux';
import Create from 'components/MigrationHistory/Create';
import {
  showCreateMigrationPopup,
  resetForm,
  setPasteDateWarning,
} from './actions';

function mapStateToProps(state) {
  return {
    isPoppedUp: state.get('migrationHistory').get('create').isPoppedUp,
    pasteDateWarning: state.get('migrationHistory').get('create').pasteDateWarning,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showCreateMigrationPopup: isPoppedUp => dispatch(showCreateMigrationPopup(isPoppedUp)),
    resetForm: () => dispatch(resetForm()),
    hidePasteDateWarning: () => dispatch(setPasteDateWarning(false)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create);
