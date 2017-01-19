//
// Container title notifications form
//

import { connect } from 'react-redux';
import NotificationsFormTitle from 'components/Notifications/Form/Title';
import { titleChange } from './actions';


function mapStateToProps(state) {
  return {
    title: state.get('notifications').get('NotificationsFormReducer').get('NotificationsFormTitleReducer').title,
    titleError: state.get('notifications').get('NotificationsFormReducer').get('NotificationsFormTitleReducer').titleError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    titleChange: title => dispatch(titleChange(title)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormTitle);
