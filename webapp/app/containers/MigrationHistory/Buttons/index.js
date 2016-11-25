//
// Container for Migration History Button
//

import { connect } from 'react-redux';
import Buttons from 'components/MigrationHistory/Buttons';
import {
  showCreateMigrationPopup,
} from '../Create/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showCreateMigrationPopup: (isPoppedUp) => dispatch(showCreateMigrationPopup(isPoppedUp)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Buttons);
