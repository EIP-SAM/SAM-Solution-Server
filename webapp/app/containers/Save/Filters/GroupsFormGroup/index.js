//
// Container GroupsFormGroup in page save
//

import { connect } from 'react-redux';
import { GroupsFormGroup } from 'components/Save/Filters/GroupsFormGroup';
import {
  getGroupsRequest,
  getVisibilityFilter,
  getGroups,
} from './actions';

function mapStateToProps(state) {
  return {
    listGroups: state.get('save').get('SaveGroupsFormGroupReducer').listGroups.groups,
    listGroupsUsers: state.get('save').get('SaveFiltersReducer').listGroupsUsers,
    listTypeUsers: state.get('save').get('SaveFiltersReducer').listTypeUsers,
    listUsers: state.get('save').get('SaveFiltersReducer').listUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroupsRequest: () => dispatch(getGroupsRequest()),
    getVisibilityFilter: (groupFilter, listGroups, listTypeUsers, listGroupsUsers, listFilterUsers) => dispatch(getVisibilityFilter(groupFilter, listGroups, listTypeUsers, listGroupsUsers, listFilterUsers)),
    getGroups: (listGroups) => dispatch(getGroups(listGroups)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupsFormGroup);
