//
// Container title notifications form
//

import { connect } from 'react-redux';
import { NotificationsFormTitle } from 'components/Notifications/Form/Title';
import { titleChange } from './actions';


function mapStateToProps(state) {
  return {
    title: state.get('notifications').get('NotificationsFormTitleReducer').title,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    titleChange: (title) => dispatch(titleChange(title)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormTitle);
