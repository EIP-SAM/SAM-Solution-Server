//
// Container persistence notifications form
//

import { connect } from 'react-redux';
import NotificationsFormPersistence from 'components/Notifications/Form/Persistence';
import { persistenceChange } from './actions';


function mapStateToProps(state) {
  return {
    persistence: state.get('notifications').get('NotificationsFormPersistenceReducer').persistence,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    persistenceChange: persistence => dispatch(persistenceChange(persistence)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormPersistence);
