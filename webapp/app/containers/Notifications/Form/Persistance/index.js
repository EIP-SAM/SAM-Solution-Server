//
// Container persistance notifications form
//

import { connect } from 'react-redux';
import { NotificationsFormPersistance } from 'components/Notifications/Form/Persistance';
import { persistanceChange } from './actions';


function mapStateToProps(state) {
  return {
    persistance: state.get('notifications').get('NotificationsFormPersistanceReducer').persistance,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    persistanceChange: (persistance) => dispatch(persistanceChange(persistance)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormPersistance);
