//
// Container description notifications form
//

import { connect } from 'react-redux';
import NotificationsFormDescription from 'components/Notifications/Form/Description';
import { descriptionChange } from './actions';


function mapStateToProps(state) {
  return {
    description: state.get('notifications').get('NotificationsFormDescriptionReducer').description,
    descriptionError: state.get('notifications').get('NotificationsFormDescriptionReducer').descriptionError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    descriptionChange: description => dispatch(descriptionChange(description)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsFormDescription);
