//
// Container group deletion modal in groups
//

import { connect } from 'react-redux';
import { GroupDeletionModal } from 'components/Groups/Table/ModalDeletionGroup';
import {
  hideInstantDeleteModal,
  deleteGroup,
} from './actions';

function mapStateToProps(state) {
  return {
    groupId: state.get('groups').get('GroupsDeletionModalReducer').groupId,
    groupName: state.get('groups').get('GroupsDeletionModalReducer').groupName,
    showModal: state.get('groups').get('GroupsDeletionModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideInstantDeleteModal: () => dispatch(hideInstantDeleteModal()),
    deleteGroup: (groupId, groupName) => dispatch(deleteGroup(groupId, groupName)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupDeletionModal);
