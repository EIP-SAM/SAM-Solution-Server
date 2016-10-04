//
// Container Groups
//

import { connect } from 'react-redux';
import { Groups } from 'components/Groups';
import {
  getGroupsRequest,
  resetAlert,
} from './actions';

function mapStateToProps(state) {
  return {
    groupName: state.get('groups').get('GroupsDeletionModalReducer').groupName,
    alertMsg: state.get('groups').get('GroupsReducer').alertMsg,
    typeAlert: state.get('groups').get('GroupsReducer').typeAlert,
    displayAlert: state.get('groups').get('GroupsReducer').displayAlert,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroupsRequest: () => dispatch(getGroupsRequest()),
    resetAlert: () => dispatch(resetAlert()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Groups);
