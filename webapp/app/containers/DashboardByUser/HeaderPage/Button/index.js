//
// Container button header dashboard by user page
//

import { connect } from 'react-redux';
import { DashboardByUserHeaderPageButton } from 'components/DashboardByUser/HeaderPage/Button';
import {
  showInstantRebootModal,
} from './ModalRebootUser/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showInstantRebootModal: () => dispatch(showInstantRebootModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardByUserHeaderPageButton);
