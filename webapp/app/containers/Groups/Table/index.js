//
// Container table groups
//

import { connect } from 'react-redux';
import { GroupTable } from 'components/Groups/Table';
import {
  showInstantDeleteModal,
  groupToDelete,
} from './ModalDeletionGroup/actions';

function mapStateToProps(state) {
  return {
    groups: state.get('groups').get('GroupsReducer').groups,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showInstantDeleteModal: () => dispatch(showInstantDeleteModal()),
    groupToDelete: (groupName, groupId) => dispatch(groupToDelete(groupName, groupId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupTable);
