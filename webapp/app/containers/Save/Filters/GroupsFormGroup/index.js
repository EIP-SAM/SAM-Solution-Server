//
// Container GroupsFormGroup in page save
//

import { connect } from 'react-redux';
import { GroupsFormGroup } from 'components/Save/Filters/GroupsFormGroup';
import {
  getGroupsRequest,
  getVisibilityFilter,
  getGroupsFormUsers,
} from './actions';

function mapStateToProps(state) {
  return {
    listGroups: state.get('save').get('SaveGroupsFormGroupReducer').listGroups.groups,
    saves: state.get('save').get('SaveReducer').saves,
    listGroupsUsers: state.get('save').get('SaveGroupsFormGroupReducer').listGroupsUsers,
    listTypeUsers: state.get('save').get('SaveTypeUserFormGroupReducer').listTypeUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroupsRequest: (listGroups) => dispatch(getGroupsRequest(listGroups)),
    getVisibilityFilter: (groupFilter, listGroups, listTypeUsers, listGroupsUsers) => dispatch(getVisibilityFilter(groupFilter, listGroups, listTypeUsers, listGroupsUsers)),
    getGroupsFormUsers: (listGroupsUsers) => dispatch(getGroupsFormUsers(listGroupsUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupsFormGroup);
