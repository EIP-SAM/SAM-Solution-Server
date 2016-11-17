//
// Container modal reboot user button header page dashboard by user page
//

import { connect } from 'react-redux';
import { DashboardByUserHeaderPageButtonRebootModal } from 'components/DashboardByUser/HeaderPage/Button/ModalRebootUser';
import {
  hideInstantRebootModal,
  rebootUser,
} from './actions';

function mapStateToProps(state) {
  return {
    showModal: state.get('dashboardByUser').get('DashboardByUserHeaderPageReducers').get('DashboardByUserRebootModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    rebootUser: (username) => dispatch(rebootUser(username)),
    hideInstantRebootModal: () => dispatch(hideInstantRebootModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardByUserHeaderPageButtonRebootModal);
